from config.db.db import Base
from model.status import Status
from sqlalchemy import Sequence
from sqlalchemy.schema import Column
from sqlalchemy.types import Boolean, Integer


class StatusDto(Base):
    __tablename__ = "status"

    id = Column(Integer, Sequence("status_id_seq"), primary_key=True)
    is_payment = Column(Boolean)
    event_id = Column(Integer)
    user_id = Column(Integer)


def dto_to_status(dto: StatusDto):
    return Status(
        id=dto.id,
        user_id=dto.user_id,
        event_id=dto.event_id,
        is_payment=dto.is_payment,
    )
