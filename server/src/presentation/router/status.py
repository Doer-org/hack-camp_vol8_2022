from config.db.session import session
from flask import Blueprint
from presentation.controller.status import StatusController
from repository.status import StatusRepository
from service.status import StatusService

# api
api = Blueprint("status", __name__)

# private variable
__r = StatusRepository(session)
__s = StatusService(__r)
__c = StatusController(__s)


@api.route("/status", methods=["POST"])
def create():
    return __c.create()
