# guestテーブル
class Guest:
    def __init__(
        self,
        event: int,
        id: int = None,
    ):
        self.id = id
        self.event = event
