from typing import Tuple

from sqlalchemy import Sequence
from sqlalchemy.orm.session import Session
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String, DateTime, Boolean

from config.db.db import Base
from model.status import Status
from utils.error.error import Error
from repository.user import UserDto

class StatusDto(Base):
    __tablename__ = "status"

    id = Column(Integer, Sequence("status_id_seq"), primary_key=True)
    is_payment = Column(Boolean)
    event_id = Column(Integer)
    user_id = Column(Integer)