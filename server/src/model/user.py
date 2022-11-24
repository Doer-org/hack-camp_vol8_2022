# userテーブル
class User:
    def __init__(
        self,
        name: str,
        LINE_ID: str,
        type: int,
        icon: str,
        id: int = None,
    ):
        self.id = id
        self.name = name
        self.LINE_ID = LINE_ID
        self.type = type
        self.icon = icon
