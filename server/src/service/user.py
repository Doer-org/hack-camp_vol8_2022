from typing import Tuple

from model.user import User
from repository.user import UserRepository
from utils.error.error import Error


class UserService:
    def __init__(self, repository: UserRepository) -> None:
        self.__repository = repository

    def get(self, line_id: str) -> Tuple[User, Error]:
        if line_id == "":
            return None, Error(msg="line_id is invalid")
        return self.__repository.get(line_id)

    def get_id(self, id: int) -> Tuple[User, Error]:
        if id == "":
            return None, Error(msg="id is invalid")
        return self.__repository.get_id(id)

    # def get_all(self) -> Tuple[list, Error]:
    #     return self.__repository.get_all()

    def create(self, u: User) -> Tuple[User, Error]:
        if u.display_name == "":
            return None, Error(msg="display_name is empty")
        if u.line_id == "":
            return None, Error(msg="line_id is empty")
        if u.picture_url == "":
            return None, Error(msg="picture_url is empty")
        return self.__repository.create(u)
