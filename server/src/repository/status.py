from typing import Tuple

from model.status import Status
from repository.event_dto import EventDto
from repository.status_dto import StatusDto
from repository.user_dto import UserDto
from sqlalchemy.orm.session import Session
from utils.error.error import Error


class StatusRepository:
    def __init__(self, session: Session) -> None:
        self.__session = session

    # status情報を保存する
    def create(self, s: Status) -> Tuple[Status, Error]:
        row_user = (
            self.__session.query(UserDto)
            .filter(s.user_id == UserDto.id)
            .first()
        )
        if row_user == None:
            return None, Error(msg="user_id is None")

        row_event = (
            self.__session.query(EventDto)
            .filter(s.event_id == EventDto.id)
            .first()
        )
        if row_event == None:
            return None, Error(msg="event_id is None")

        row = (
            self.__session.query(StatusDto)
            .filter(s.user_id == StatusDto.user_id)
            .filter(s.event_id == StatusDto.event_id)
            .first()
        )

        if row != None:
            return None, Error(msg="status create error")

        dto = StatusDto()
        dto.user_id = s.user_id
        dto.event_id = s.event_id
        dto.is_payment = False

        self.__session.add(dto)
        self.__session.commit()

        s.id = dto.id
        s.is_payment = False

        return s, None

    def update(self, s: Status) -> Tuple[Status, Error]:
        dto = (
            self.__session.query(StatusDto)
            .filter(s.user_id == StatusDto.user_id)
            .filter(s.event_id == StatusDto.event_id)
            .first()
        )
        dto.is_payment = True
        self.__session.commit()
        s.id = dto.id
        s.is_payment = dto.is_payment

        return s, None
