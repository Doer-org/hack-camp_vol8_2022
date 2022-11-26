from flask import jsonify, request
from model.status import Status
from service.status import StatusService


class StatusController:
    def __init__(self, service: StatusService) -> None:
        self.__service = service

    def create(self) -> dict:
        j = request.get_json()
        s = json_to_status(j)
        status, err = self.__service.create(s)
        if err != None:
            return err.create_resp()

        sJson = status_to_json(status)
        return sJson

    def update(self) -> dict:
        j = request.get_json()
        s = json_to_status(j)
        status, err = self.__service.update(s)
        if err != None:
            return err.create_resp()

        sJson = status_to_json(status)
        return sJson


def status_to_json(s: Status) -> dict:
    return {
        "id": s.id,
        "is_payment": s.is_payment,
        "event_id": s.event_id,
        "user_id": s.user_id,
    }


def json_to_status(j: dict) -> Status:
    return Status(
        id=None,
        user_id=j["user_id"],
        event_id=j["event_id"],
        is_payment=None,
    )
