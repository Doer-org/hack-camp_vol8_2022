from typing import Tuple

from sqlalchemy import Sequence
from sqlalchemy.orm.session import Session
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String, Boolean
from sqlalchemy.sql.expression import false

from config.db.db import Base
from model.scheduler import Scheduler
from utils.error.error import Error
import notification.scheduler
import math


class SchedulerRepository:
    def __init__(self, session: Session) -> None:
        self.__session = session

    # Schedulerを取得し、それを返す
    def get(self) -> Tuple[Scheduler, Error]:
        dtos_status = (
            self.__session.query(SchedulerDtoStatus)
            .filter(SchedulerDtoStatus.is_payment == false())  # is_paymentがFalseを抜き出す
            .all()
        )
        dtos_user = (
            self.__session.query(SchedulerDtoUser)
            .filter(SchedulerDtoUser.id == dtos_status.id)
            .all()
        )
        dtos_event = (
            self.__session.query(SchedulerDtoEvent)
            .filter(SchedulerDtoEvent.id == dtos_user.id)
            .all()
        )

        # TODO 見つからなかった場合のエラーハンドリング

        # notificationに渡す
        list_line_id, list_price = dtos_to_scheduler(dtos_user, dtos_event)
        notification.scheduler.scheduler(list_line_id, list_price)
        # 返り値でエラーでるかも
        return dtos_to_scheduler(dtos_user, dtos_event), None

    # # user情報を保存する
    # def create(self, u: Scheduler) -> Tuple[Scheduler, Error]:
    #     dto = SchedulerDto()
    #     dto.display_name = u.display_name
    #     dto.line_id = u.line_id
    #     dto.picture_url = u.picture_url

    #     self.__session.add(dto)
    #     self.__session.commit()

    #     return u, None


class SchedulerDtoUser(Base):
    __tablename__ = "users"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, Sequence("users_id_seq"), primary_key=True)
    line_id = Column(String(255))


class SchedulerDtoStatus(Base):
    __tablename__ = "status"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, Sequence("users_id_seq"), primary_key=True)
    is_payment = Column(Boolean)


class SchedulerDtoEvent(Base):
    __tablename__ = "events"
    __table_args__ = {'extend_existing': True}
    id = Column(Integer, Sequence("users_id_seq"), primary_key=True)
    total_amount = Column(Integer)
    number = Column(Integer)


# def dto_to_scheduler(dto: SchedulerDto):
#     return Scheduler(
#         id=dto.id,
#         line_id=dto.line_id,
#         is_payment=dto.is_payment

#     )


def dtos_to_scheduler(dtos_user: list, dtos_event: list):
    list_line_id = []
    list_price = []
    for dto in dtos_user:
        list_line_id.append(dto.line_id)
    for dto in dtos_event:
        price = math.ceil(dto.total_amount/dto.number / 100) * 100
        list_price.append(price)
    # scheduler = [list_line_id, list_price]
    return list_line_id, list_price
