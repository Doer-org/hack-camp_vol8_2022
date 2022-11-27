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


@api.route("/user/<line_id>", methods=["GET"])
def get(line_id):
    return __c.get(line_id)


@api.route("/user_id/<int:id>", methods=["GET"])
def get_id(id):
    return __c.get_id(id)


# @api.route("/user/all", methods=["GET"])
# def get_all():
#     return __c.get_all()


@api.route("/user", methods=["POST"])
def create():
    return __c.create()
