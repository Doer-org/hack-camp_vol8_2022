from typing import Tuple

from model.status import Status
from repository.status_dto import StatusDto
from sqlalchemy.orm.session import Session
from utils.error.error import Error


class StatusRepository:
    def __init__(self, session: Session) -> None:
        self.__session = session

    # status情報を保存する
    def create(self, s: Status) -> Tuple[Status, Error]:
        dto = StatusDto()
        dto.user_id = s.user_id
        dto.event_id = s.event_id
        dto.is_payment = False

        self.__session.add(dto)
        self.__session.commit()

        s.id = dto.id
        s.is_payment = False

        return s, None
