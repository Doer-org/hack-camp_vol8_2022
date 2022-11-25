from typing import Tuple

from sqlalchemy import Sequence
from sqlalchemy.orm.session import Session
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String

from config.db.db import Base
from model.event import Event
from utils.error.error import Error


class EventRepository:
    def __init__(self, session: Session) -> None:
        self.__session = session

    # eventを取得し、それを返す
    def get(self, id: int) -> Tuple[Event, Error]:
        dto = (
            self.__session.query(EventDto)
            .filter(EventDto.id == id)
            .limit(1)
            .one()
        )
        # TODO 見つからなかった場合のエラーハンドリング

        return dto_to_event(dto), None

    # # すべてのユーザーを取得する
    # def get_all(self) -> Tuple[list, Error]:
    #     dtos = self.__session.query(UserDto).all()

    #     return dtos_to_users(dtos), None

    # # event情報を保存する
    def create(self, e: Event) -> Tuple[Event, Error]:
        dto = EventDto()
        dto.name = e.name
        dto.number = e.number
        dto.total_amount = e.total_amount

        self.__session.add(dto)
        self.__session.commit()

        return e, None


class EventDto(Base):
    __tablename__ = "events"

    id = Column(Integer, Sequence("events_id_seq"), primary_key=True)
    name = Column(String(255))
    number = Column(Integer)
    total_amount = Column(Integer)
    admin_id = Column(Integer)
    created_at = Column(Integer)


def dto_to_event(dto: EventDto):
    return Event(
        id=dto.id,
        name=dto.name,
        number=dto.number,
        total_amount=dto.total_amount,
        admin_id=dto.admin_id,
        created_at=dto.created_at
    )


def dtos_to_event(dtos: list):
    events = []
    for dto in dtos:
        events.append(dto_to_event(dto))
    return events
