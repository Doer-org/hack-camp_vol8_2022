# paymentテーブル
from model.event import Event
from model.guest import Guest


class Payment:
    def __init__(
        self,
        guest: int,
        event: int,
        paid_amount: int,
        not_paid_amount: int = None,
    ):
        self.event = event
        self.guest = guest
        self.paid_amount = paid_amount
        self.not_paid_amount = not_paid_amount
