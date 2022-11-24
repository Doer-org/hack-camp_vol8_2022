from flask import jsonify, request
from model.user import User
from service.user import UserService


class UserController:
    def __init__(self, service: UserService) -> None:
        self.__service = service

    def get(self, id: int) -> dict:
        user, err = self.__service.get(id)
        if err != None:
            return err.create_resp()

        uJson = model_to_json(user)
        return uJson

    def get_all(self) -> dict:
        users, err = self.__service.get_all()
        if err != None:
            return err.create_resp()

        usJson = models_to_jsons(users)
        return jsonify({"users": usJson})

    def create(self) -> dict:
        j = request.get_json()
        u = json_to_model(j)
        user, err = self.__service.create(u)
        if err != None:
            return err.create_resp()

        uJson = model_to_json(user)
        return uJson


def model_to_json(u: User) -> dict:
    return {
        "id": u.id,
        "name": u.name,
        "age": u.age,
    }


def models_to_jsons(us: list) -> list:
    usJson = []
    for u in us:
        usJson.append(model_to_json(u))
    return usJson


def json_to_model(j: dict) -> User:
    return User(name=j["name"], age=j["age"])  # TODO なかった時key errorになるので直す
