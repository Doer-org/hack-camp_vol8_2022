from flask import Blueprint

from config.db.session import session
from presentation.controller.scheduler import SchedulerController
from repository.scheduler import SchedulerRepository
from service.scheduler import SchedulerService

# import notification.scheduler

# api
api = Blueprint("scheduler", __name__)

# private variable
__r = SchedulerRepository(session)
__s = SchedulerService(__r)
__c = SchedulerController(__s)


@api.route("/scheduler", methods=["GET"])
def get():
    __c.get()
    return "通知完了！"
    # notification.scheduler.scheduler()
    # return "scheduler完了"
