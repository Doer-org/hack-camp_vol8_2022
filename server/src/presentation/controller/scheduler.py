from flask import jsonify, request

from model.scheduler import Scheduler
from service.scheduler import SchedulerService


class SchedulerController:
    def __init__(self, service: SchedulerService) -> None:
        self.__service = service

    def get(self) -> dict:
        scheduler, err = self.__service.get()
        if err != None:
            return err.create_resp()

        # eJson = model_to_json(scheduler)
        return 0

    # def get_all(self) -> dict:
    #     users, err = self.__service.get_all()
    #     if err != None:
    #         return err.create_resp()

    #     usJson = models_to_jsons(users)
    #     return jsonify({"users": usJson})

    # def create(self) -> dict:
    #     j = request.get_json()
    #     e = json_to_model(j)
    #     scheduler, err = self.__service.create(e)
    #     if err != None:
    #         return err.create_resp()

    #     eJson = model_to_json(scheduler)
    #     return eJson


def model_to_json(e: Scheduler) -> dict:
    return {
        "id": e.id,
        "name": e.name,
        "number": e.number,
        "total_amount": e.total_amount,
    }


def models_to_jsons(es: list) -> list:
    esJson = []
    for e in es:
        esJson.append(model_to_json(e))
    return esJson


def json_to_model(j: dict) -> Scheduler:
    return Scheduler(
        name=j["name"],
        number=j["number"],
        total_amount=j["total_amount"],
    )  # TODO なかった時key errorになるので直す
