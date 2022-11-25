from config.db.db import Base
from model.participant import Participant
from model.status import Status
from model.user import User


def dto_to_participant(dto: any):
    return Participant(
        user=User(
            id=dto.id,
            display_name=dto.display_name,
            line_id=dto.line_id,
            picture_url=dto.picture_url,
        ),
        status=Status(
            id=None,
            is_payment=dto.is_payment,
            event_id=dto.event_id,
            user_id=dto.user_id,
        ),
    )


def dtos_to_participants(dtos: list):
    ps = []
    for dto in dtos:
        ps.append(dto_to_participant(dto))
    return ps
