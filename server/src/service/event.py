from typing import Tuple

from model.event import Event
from repository.event import EventRepository
from utils.error.error import Error


class EventService:
    def __init__(self, repository: EventRepository) -> None:
        self.__repository = repository

    def get(self, id: int) -> Tuple[Event, Error]:
        if id == 0:
            return None, Error(msg="id is invalid")
        return self.__repository.get(id)

    # def get_all(self) -> Tuple[list, Error]:
    #     return self.__repository.get_all()

    def create(self, e: Event) -> Tuple[Event, Error]:
        if e.name == "":
            return None, Error(msg="name is empty")
        if e.number == "":
            return None, Error(msg="number is empty")
        if e.total_amount == "":
            return None, Error(msg="total_amount is empty")
        return self.__repository.create(e)
