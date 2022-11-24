from typing import Tuple

from config.db.db import Base
from model.user import User
from sqlalchemy import Sequence
from sqlalchemy.orm.session import Session
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String
from utils.error.error import Error


class UserRepository:
    def __init__(self, session: Session) -> None:
        self.__session = session

    # userを取得し、それを返す
    def get(self, id: int) -> Tuple[list, Error]:
        dto = (
            self.__session.query(UserDto)
            .filter(UserDto.id == id)
            .limit(1)
            .one()
        )
        # TODO 見つからなかった場合のエラーハンドリング

        return dto_to_user(dto), None

    # すべてのユーザーを取得する
    def get_all(self) -> Tuple[list, Error]:
        dtos = self.__session.query(UserDto).all()

        return dtos_to_users(dtos), None

    # user情報を保存する
    def create(self, u: User) -> Tuple[User, Error]:
        dto = UserDto()
        dto.name = u.name
        dto.age = u.age

        self.__session.add(dto)
        self.__session.commit()

        return u, None


class UserDto(Base):
    __tablename__ = "users"

    id = Column(Integer, Sequence("users_id_seq"), primary_key=True)
    name = Column(String(255))
    age = Column(Integer)


def dto_to_user(dto: UserDto):
    return User(id=dto.id, name=dto.name, age=dto.age)


def dtos_to_users(dtos: list):
    users = []
    for dto in dtos:
        users.append(dto_to_user(dto))
    return users
