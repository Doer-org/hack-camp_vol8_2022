from flask import Blueprint

from config.db.session import session
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

@api.route("/event", methods=["POST"])
def create():
    return __c.create()