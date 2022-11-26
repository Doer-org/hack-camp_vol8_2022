from flask import Blueprint

# from config.db.session import session
# from presentation.controller.schedluer import SchedluerController
# from repository.schedluer import SchedluerRepository
# from service.schedluer import SchedluerService

import notification.scheduler

# api
api = Blueprint("scheduler", __name__)

# private variable
# __r = SchedluerRepository(session)
# __s = SchedluerService(__r)
# __c = SchedluerController(__s)


@api.route("/scheduler", methods=["GET"])
def get():

    # return __c.get()
    notification.scheduler.scheduler()
    return "scheduler完了"
