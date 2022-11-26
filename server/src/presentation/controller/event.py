from flask import jsonify, request
from model.event import Event
from presentation.controller.participant import participants_to_jsons
from service.event import EventService


class EventController:
    def __init__(self, service: EventService) -> None:
        self.__service = service

    def get(self, id: int) -> dict:
        event, err = self.__service.get(id)
        if err != None:
            return err.create_resp()

        eJson = event_to_json(event)
        print(eJson)
        return eJson

    # def get_all(self) -> dict:
    #     users, err = self.__service.get_all()
    #     if err != None:
    #         return err.create_resp()

    #     usJson = models_to_jsons(users)
    #     return jsonify({"users": usJson})

    def create(self) -> dict:
        j = request.get_json()
        e = json_to_event(j)
        event, err = self.__service.create(e)
        if err != None:
            return err.create_resp()

        eJson = event_to_json(event)
        return eJson


def event_to_json(e: Event) -> dict:
    return {
        "id": e.id,
        "name": e.name,
        "number": e.number,
        "total_amount": e.total_amount,
        "admin_id": e.admin_id,
        "participants": participants_to_jsons(e.participants),
    }


def json_to_event(j: dict) -> Event:
    return Event(
        name=j["name"],
        number=j["number"],
        total_amount=j["total_amount"],
        admin_id=j["admin_id"],
        id=None,
        participants=[],
        created_at=None,
    )  # TODO なかった時key errorになるので直す
