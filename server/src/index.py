from flask import Flask, request, abort
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

ACCESS_TOKEN = os.environ["ACCESS_TOKEN"]
SECRET = os.environ["SECRET"]
USER_ID_DEBUG = os.environ["USER_ID_DEBUG"]

line_bot_api = LineBotApi(ACCESS_TOKEN)
handler = WebhookHandler(SECRET)
app = Flask(__name__)


@app.route("/")
def index():
    return "<h1>Hello, Flask!</h1>"


@app.route("/notification_scheduler")
def notification_scheduler():
    # 指定したユーザーIDに通知
    text_message = "Hello world!"
    line_bot_api.push_message(USER_ID_DEBUG, TextSendMessage(text=text_message))
    return "OK"


@app.route("/callback", methods=["POST"])
def callback():
    print("ok")
    # リクエストヘッダーから署名検証のための値を取得します。
    signature = request.headers["X-Line-Signature"]
    # リクエストボディを取得します。
    body = request.get_data(as_text=True)
    app.logger.info("Request body: " + body)
    # handle webhook body
    try:
        handler.handle(body, signature)
    except InvalidSignatureError:
        abort(400)
    return "OK"

# LINEidを受け取りイベントコードを返す postで受け取る


@app.route("/get_event_id", methods=["POST"])
def get_event_id():
    line_id = request.form["line_id"]

    pass


@handler.add(MessageEvent, message=TextMessage)
def handle_message(event):
    line_bot_api.reply_message(
        event.reply_token,
        TextSendMessage(text=event.message.text))
    user_id = event.source.user_id
    print(user_id)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
