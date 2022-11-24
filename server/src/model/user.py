# userオブジェクト
class User:
    def __init__(
        self,
        id: int,
        display_name: str,
        line_id: str,
        picture_url: str,
    ):
        self.id = id
        self.display_name = display_name
        self.line_id = line_id
        self.picture_url = picture_url
