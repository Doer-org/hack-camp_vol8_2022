from config.db.db import Base
from model.event import Event
from sqlalchemy import Sequence
from sqlalchemy.schema import Column
from sqlalchemy.types import DateTime, Integer, String


class EventDto(Base):
    __tablename__ = "events"

    id = Column(Integer, Sequence("events_id_seq"), primary_key=True)
    name = Column(String(255))
    number = Column(Integer)
    total_amount = Column(Integer)
    admin_id = Column(Integer)
    created_at = Column(DateTime)


def dto_to_event(dto: EventDto, participants: list):
    return Event(
        id=dto.id,
        name=dto.name,
        number=dto.number,
        total_amount=dto.total_amount,
        admin_id=dto.admin_id,
        created_at=dto.created_at,
        participants=participants,
    )
