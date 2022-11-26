from typing import Tuple

from model.user import User
from repository.user_dto import UserDto, dto_to_user
from sqlalchemy.orm.session import Session
from utils.error.error import Error


class UserRepository:
    def __init__(self, session: Session) -> None:
        self.__session = session

    # userを取得し、それを返す
    def get(self, line_id: str) -> Tuple[User, Error]:
        dto = (
            self.__session.query(UserDto)
            .filter(UserDto.line_id == line_id)
            .limit(1)
            .one()
        )
        # TODO 見つからなかった場合のエラーハンドリング

        return dto_to_user(dto), None

    # # すべてのユーザーを取得する
    # def get_all(self) -> Tuple[list, Error]:
    #     dtos = self.__session.query(UserDto).all()

    #     return dtos_to_users(dtos), None

    # # user情報を保存する
    def create(self, u: User) -> Tuple[User, Error]:
        dto = UserDto()
        dto.display_name = u.display_name
        dto.line_id = u.line_id
        dto.picture_url = u.picture_url

        self.__session.add(dto)
        self.__session.commit()

        return u, None
