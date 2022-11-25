from typing import Tuple

from sqlalchemy import Sequence
from sqlalchemy.orm.session import Session
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String, DateTime

from config.db.db import Base
from model.event import Event
from model.participant import Participant
from utils.error.error import Error
from repository.user import UserDto
from repository.status import StatusDto

class EventRepository:
    def __init__(self, session: Session) -> None:
        self.__session = session

    # eventを取得し、それを返す
    def get(self, id: int) -> Tuple[Event, Error]:
        dto_event = (
            self.__session.query(EventDto)
            .filter(EventDto.id == id)
            .limit(1)
            .one()
        )
        dto_participants = (
            self.__session.query(UserDto, UserDto.id, UserDto.display_name, UserDto.line_id, UserDto.picture_url, StatusDto.is_payment)
            .join(StatusDto, StatusDto.user_id == UserDto.id)
            .filter(StatusDto.event_id == dto_event.id)
            .all()
        )
        print(dto)
        print(dto[0].is_payment)
        
        dto_to_participant = ()
        
        
        
        # TODO 見つからなかった場合のエラーハンドリング

        return dto_to_event(dto_event), None

    # # event情報を保存する
    def create(self, e: Event) -> Tuple[Event, Error]:
        dto = EventDto()
        dto.name = e.name
        dto.number = e.number
        dto.total_amount = e.total_amount
        dto.admin_id = e.admin_id

        self.__session.add(dto)
        self.__session.commit()
        e.id = dto.id

        return e, None


class EventDto(Base):
    __tablename__ = "events"

    id = Column(Integer, Sequence("events_id_seq"), primary_key=True)
    name = Column(String(255))
    number = Column(Integer)
    total_amount = Column(Integer)
    admin_id = Column(Integer)
    created_at = Column(DateTime)


def dto_to_event(dto: EventDto):
    return Event(
        id=dto.id,
        name=dto.name,
        number=dto.number,
        total_amount=dto.total_amount,
        admin_id=dto.admin_id,
        created_at=dto.created_at,
    )


def dtos_to_event(dtos: list):
    events = []
    for dto in dtos:
        events.append(dto_to_event(dto))
    return events
