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

        uJson = user_to_json(user)
        return uJson

    # def get_all(self) -> dict:
    #     users, err = self.__service.get_all()
    #     if err != None:
    #         return err.create_resp()

    #     usJson = models_to_jsons(users)
    #     return jsonify({"users": usJson})

    def create(self) -> dict:
        j = request.get_json()
        u = json_to_user(j)
        user, err = self.__service.create(u)
        if err != None:
            return err.create_resp()

        uJson = user_to_json(user)
        return uJson


def user_to_json(u: User) -> dict:
    return {
        "id": u.id,
        "display_name": u.display_name,
        "line_id": u.line_id,
        "picture_url": u.picture_url,
    }


def json_to_user(j: dict) -> User:
    return User(
        id=None,
        display_name=j["display_name"],
        line_id=j["line_id"],
        picture_url=j["picture_url"],
    )  # TODO なかった時key errorになるので直す
