from config.db.db import Base
from model.user import User
from sqlalchemy import Sequence
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String


class UserDto(Base):
    __tablename__ = "users"

    id = Column(Integer, Sequence("users_id_seq"), primary_key=True)
    display_name = Column(String(255))
    line_id = Column(String(255), unique=True)
    picture_url = Column(String(255))


def dto_to_user(dto: UserDto):
    return User(
        id=dto.id,
        display_name=dto.display_name,
        line_id=dto.line_id,
        picture_url=dto.picture_url,
    )


def dtos_to_users(dtos: list):
    users = []
    for dto in dtos:
        users.append(dto_to_user(dto))
    return users
