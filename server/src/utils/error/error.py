class Error:
    def __init__(self, msg: str) -> None:
        self.msg = msg

    def create_resp(self) -> dict:
        return {"error": self.msg}
