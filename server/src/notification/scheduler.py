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


def scheduler(list_line_id: list, list_price: list):
    # 指定したユーザーIDに通知
    ACCESS_TOKEN = os.environ["ACCESS_TOKEN"]
    # SECRET = os.environ["SECRET"]
    # USER_ID_DEBUG = os.environ["USER_ID_DEBUG"]
    line_bot_api = LineBotApi(ACCESS_TOKEN)
    default_text_message = "滞納しているよ！！！"
    for line_id, price in zip(list_line_id, list_price):
        text_message = str(price) + "円" + default_text_message
        line_bot_api.push_message(line_id, TextSendMessage(text=text_message))
