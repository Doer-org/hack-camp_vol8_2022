# Schedulerオブジェクト
class Scheduler:
    def __init__(
        self,
        id: int,
        line_id: str,
        is_payment: bool,
    ):
        self.id = id
        self.line_id = line_id
        self.is_payment = is_payment
