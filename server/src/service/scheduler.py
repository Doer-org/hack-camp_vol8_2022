from typing import Tuple

from model.scheduler import Scheduler
from repository.scheduler import SchedulerRepository
from utils.error.error import Error


class SchedulerService:
    def __init__(self, repository: SchedulerRepository) -> None:
        self.__repository = repository

    def get(self) -> Tuple[Scheduler, Error]:

        # noticeに値を渡す

        return self.__repository.get()

    # def get_all(self) -> Tuple[list, Error]:
    #     return self.__repository.get_all()
