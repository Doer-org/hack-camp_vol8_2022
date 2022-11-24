from typing import Tuple

from model.user import User
from repository.user import UserRepository
from utils.error.error import Error


class UserService:
    def __init__(self, repository: UserRepository) -> None:
        self.__repository = repository

    def get(self, id: int) -> Tuple[User, Error]:
        if id == 0:
            return None, Error(msg="id is invalid")
        return self.__repository.get(id)

    def get_all(self) -> Tuple[list, Error]:
        return self.__repository.get_all()

    def create(self, u: User) -> Tuple[User, Error]:
        if u.name == "":
            return None, Error(msg="name is empty")
        if u.age == 0:
            return None, Error(msg="age is empty")
        return self.__repository.create(u)
