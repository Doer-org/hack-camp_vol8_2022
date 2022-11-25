# statusオブジェクト
class Status:
    def __init__(
        self,
        id: int,
        is_payment: bool,
        event_id: int,
        user_id: int,
    ):
        self.id = id
        self.is_payment = is_payment
        self.event_id = event_id
        self.user_id = user_id
