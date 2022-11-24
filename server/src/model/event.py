# eventテーブル
class Event:
    def __init__(
        self,
        name: str,
        created_at: timestamp,
        sum_price: int,
        number: int,
        id: int = None,
    ):
        self.id = id
        self.name = name
        self.created_at = created_at
        self.sum_price = sum_price
        self.number = number
