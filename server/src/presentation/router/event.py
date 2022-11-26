from config.db.session import session
from flask import Blueprint
from flask_cors import cross_origin
from presentation.controller.event import EventController
from repository.event import EventRepository
from service.event import EventService

# api
api = Blueprint("event", __name__)

# private variable
__r = EventRepository(session)
__s = EventService(__r)
__c = EventController(__s)


@api.route("/event/<int:id>", methods=["GET"])
def get(id):
    return __c.get(id)


@cross_origin()
@api.route("/event", methods=["POST"])
def create():
    return __c.create()
