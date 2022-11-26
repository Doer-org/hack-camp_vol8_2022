from typing import Tuple

from model.status import Status
from repository.status import StatusRepository
from utils.error.error import Error


class StatusService:
    def __init__(self, repository: StatusRepository) -> None:
        self.__repository = repository

    def create(self, s: Status) -> Tuple[Status, Error]:
        if s.user_id == "":
            return None, Error(msg="user_id is empty")
        if s.event_id == "":
            return None, Error(msg="event_id is empty")
        return self.__repository.create(s)
