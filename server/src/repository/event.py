from typing import Tuple

from model.event import Event
from model.participant import Participant
from repository.event_dto import EventDto, dto_to_event
from repository.participant_dto import dtos_to_participants
from repository.status_dto import StatusDto
from repository.user import UserDto
from sqlalchemy.orm.session import Session
from utils.error.error import Error


class EventRepository:
    def __init__(self, session: Session) -> None:
        self.__session = session

    # eventを取得し、それを返す
    def get(self, id: int) -> Tuple[Event, Error]:
        dto_event = (
            self.__session.query(EventDto)
            .filter(EventDto.id == id)
            .limit(1)
            .one()
        )
        dto_participants = (
            self.__session.query(
                UserDto,
                UserDto.id,
                UserDto.display_name,
                UserDto.line_id,
                UserDto.picture_url,
                StatusDto.is_payment,
                StatusDto.event_id,
                StatusDto.user_id,
            )
            .join(StatusDto, StatusDto.user_id == UserDto.id)
            .filter(StatusDto.event_id == dto_event.id)
            .all()
        )
        print(dto_participants)
        print(dto_participants[0].is_payment)

        dto_to_participant = ()

        # TODO 見つからなかった場合のエラーハンドリング

        return (
            dto_to_event(dto_event, dtos_to_participants(dto_participants)),
            None,
        )

    # # event情報を保存する
    def create(self, e: Event) -> Tuple[Event, Error]:
        dto = EventDto()
        dto.name = e.name
        dto.number = e.number
        dto.total_amount = e.total_amount
        dto.admin_id = e.admin_id

        self.__session.add(dto)
        self.__session.commit()
        e.id = dto.id

        return e, None
