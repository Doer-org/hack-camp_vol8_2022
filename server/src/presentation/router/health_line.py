from flask import Flask, request, abort, Blueprint
from linebot import (
    LineBotApi, WebhookHandler
)
from linebot.exceptions import (
    InvalidSignatureError
)
from linebot.models import (
    MessageEvent, TextMessage, TextSendMessage
)
import os


api = Blueprint("health_line", __name__)
ACCESS_TOKEN = os.environ["ACCESS_TOKEN"]
SECRET = os.environ["SECRET"]
USER_ID_DEBUG = os.environ["USER_ID_DEBUG"]

line_bot_api = LineBotApi(ACCESS_TOKEN)
handler = WebhookHandler(SECRET)


@api.route("/callback", methods=["POST"])
def callback():
    print("ok")
    # リクエストヘッダーから署名検証のための値を取得します。
    signature = request.headers["X-Line-Signature"]
    # リクエストボディを取得します。
    body = request.get_data(as_text=True)
    api.logger.info("Request body: " + body)
    # handle webhook body
    try:
        handler.handle(body, signature)
    except InvalidSignatureError:
        abort(400)
    return "OK"


@api.route("/health_line", methods=["GET"])
def health_line():
    # 指定したユーザーIDに通知
    text_message = "Hello world!"
    messages = TextSendMessage(text=text_message)
    line_bot_api.broadcast(messages=messages)
    # line_bot_api.push_message(USER_ID_DEBUG, TextSendMessage(text=text_message))
    return {"health_line": "good!!!!"}
