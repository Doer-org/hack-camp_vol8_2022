from typing import Tuple

from sqlalchemy import Sequence
from sqlalchemy.orm.session import Session
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String, Boolean
from sqlalchemy.sql.expression import false

from config.db.db import Base
from model.scheduler import Scheduler
from utils.error.error import Error
import notification.scheduler
import math
from repository.status_dto import StatusDto
from repository.user_dto import UserDto
from repository.event_dto import EventDto


class SchedulerRepository:
    def __init__(self, session: Session) -> None:
        self.__session = session

    # Schedulerを取得し、それを返す
    def get(self) -> Tuple[Scheduler, Error]:
        dtos_notification_user = (
            self.__session.query(
                UserDto,
                UserDto.line_id,
                EventDto.total_amount,
                EventDto.number,
            )
            .join(StatusDto, StatusDto.user_id == UserDto.id)
            .join(EventDto, StatusDto.event_id == EventDto.id)
            .filter(StatusDto.is_payment == false())  # is_paymentがFalseを抜き出す
            .all()
        )

        # notificationに渡す
        list_line_id, list_price = dtos_to_scheduler(dtos_notification_user)
        notification.scheduler.scheduler(list_line_id, list_price)
        # 返り値でエラーでるかも
        return dtos_to_scheduler(dtos_notification_user), None


def dtos_to_scheduler(dtos_user: list):
    list_line_id = []
    list_price = []
    for dto_user in dtos_user:
        list_line_id.append(dto_user.line_id)
        price = math.ceil(dto_user.total_amount/dto_user.number / 100) * 100
        list_price.append(price)
    return list_line_id, list_price
