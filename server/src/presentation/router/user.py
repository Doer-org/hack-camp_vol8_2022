from config.db.session import session
from flask import Blueprint
from presentation.controller.user import UserController
from repository.user import UserRepository
from service.user import UserService

# api
api = Blueprint("user", __name__)

# private variable
__r = UserRepository(session)
__s = UserService(__r)
__c = UserController(__s)


@api.route("/user/<int:id>", methods=["GET"])
def get(id):
    return __c.get(id)


@api.route("/user/all", methods=["GET"])
def get_all():
    return __c.get_all()


@api.route("/user", methods=["POST"])
def create():
    return __c.create()
