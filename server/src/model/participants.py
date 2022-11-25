from model.status import Status
from model.user import User


# participantオブジェクト
class Participant:
    def __init__(self, user: User, status: Status):
        self.user = user
        self.status = status
