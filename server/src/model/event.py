from model.status import Status


# Eventテーブル
class Event:
    def __init__(
        self,
        id: int,
        name: str,
        admin_id: int,
        total_amount: int,
        number: int,
        created_at,  #: timestamp, 型
    ):
        self.id = id
        self.name = name
        self.admin_id = admin_id
        self.total_amount = total_amount
        self.number = number
        self.created_at = created_at
