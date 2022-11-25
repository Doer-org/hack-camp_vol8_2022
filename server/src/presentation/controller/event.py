from flask import jsonify, request

from model.event import Event
from service.event import EventService


class EventController:
    def __init__(self, service: EventService) -> None:
        self.__service = service

    def get(self, id: int) -> dict:
        event, err = self.__service.get(id)
        if err != None:
            return err.create_resp()

        eJson = model_to_json(event)
        return eJson

    # def get_all(self) -> dict:
    #     users, err = self.__service.get_all()
    #     if err != None:
    #         return err.create_resp()

    #     usJson = models_to_jsons(users)
    #     return jsonify({"users": usJson})

    def create(self) -> dict:
        j = request.get_json()
        e = json_to_model(j)
        event, err = self.__service.create(e)
        if err != None:
            return err.create_resp()

        eJson = model_to_json(event)
        return eJson


def model_to_json(e: Event) -> dict:
    return {
        "id": e.id,
        "name": e.name,
        "number": e.number,
        "total_amount": e.total_amount,
        "admin_id": e.admin_id,
    }


def models_to_jsons(es: list) -> list:
    esJson = []
    for e in es:
        esJson.append(model_to_json(e))
    return esJson


def json_to_model(j: dict) -> Event:
    return Event(
        name=j["name"],
        number=j["number"],
        total_amount=j["total_amount"],
        admin_id=j["admin_id"],
        id=None,
        created_at=None
    )  # TODO なかった時key errorになるので直す