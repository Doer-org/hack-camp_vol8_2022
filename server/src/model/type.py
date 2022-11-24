from model.guest import Guest


# typeテーブル
class Type:
    def __init__(
        self,
        guest: int,
        type: int = None,
    ):
        self.guest = guest
        self.type = type
