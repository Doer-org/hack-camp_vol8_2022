from typing import Tuple

from sqlalchemy import Sequence
from sqlalchemy.orm.session import Session
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String, Boolean
from sqlalchemy.sql.expression import false

from config.db.db import Base
from model.scheduler import Scheduler
from utils.error.error import Error


class SchedulerRepository:
    def __init__(self, session: Session) -> None:
        self.__session = session

    # Schedulerを取得し、それを返す
    def get(self) -> Tuple[Scheduler, Error]:
        dtos = (
            self.__session.query(SchedulerDto)
            .filter(SchedulerDto.is_payment == false())  # is_paymentがFalseを抜き出す
            .all()
        )
        # TODO 見つからなかった場合のエラーハンドリング

        return dtos_to_scheduler(dtos), None

    # # user情報を保存する
    # def create(self, u: Scheduler) -> Tuple[Scheduler, Error]:
    #     dto = SchedulerDto()
    #     dto.display_name = u.display_name
    #     dto.line_id = u.line_id
    #     dto.picture_url = u.picture_url

    #     self.__session.add(dto)
    #     self.__session.commit()

    #     return u, None


class SchedulerDto(Base):
    __tablename__ = "users"

    id = Column(Integer, Sequence("users_id_seq"), primary_key=True)
    line_id = Column(String(255))
    is_payment = Column(Boolean)


def dto_to_scheduler(dto: SchedulerDto):
    return Scheduler(
        id=dto.id,
        line_id=dto.line_id,
        is_payment=dto.is_payment

    )


def dtos_to_scheduler(dtos: list):
    scheduler = []
    for dto in dtos:
        scheduler.append(dto_to_scheduler(dto))
    return scheduler
