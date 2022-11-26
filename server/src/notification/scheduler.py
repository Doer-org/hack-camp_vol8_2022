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
from model.scheduler import Scheduler
from config.db.session import session
from config.db.db import Base
from sqlalchemy import Sequence
from sqlalchemy.orm.session import Session
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String, Boolean
from sqlalchemy.sql.expression import false


def scheduler():
    # 指定したユーザーIDに通知
    ACCESS_TOKEN = os.environ["ACCESS_TOKEN"]
    # SECRET = os.environ["SECRET"]
    # USER_ID_DEBUG = os.environ["USER_ID_DEBUG"]
    line_bot_api = LineBotApi(ACCESS_TOKEN)

    dtos_status = (
        session.query(SchedulerDto_status)
        .filter(SchedulerDto_status.is_payment == false())  # is_paymentがFalseを抜き出す
        .all()
    )
    dtos_user = (
        session.query(SchedulerDto_user)
        .filter(SchedulerDto_user.id == dtos_status.id)  # is_paymentがFalseを抜き出す
        .all()
    )
    dtos_event = (
        session.query(SchedulerDto_event)
        .filter(SchedulerDto_user.id == dtos_status.id)  # is_paymentがFalseを抜き出す
        .all()
    )

    list_line_id_minou = []
    list_minou_price = []
    text_message = "滞納してるよ！！！"
    for dto in dtos_user:
        list_line_id_minou.append(dto.line_id)
    for dto in dtos_event:
        list_minou_price.append(dto.total_amount/dto.number)
    for line_id_minou, minou_price in zip(list_line_id_minou, list_minou_price):
        text_message = str(minou_price) + "円" + text_message
        line_bot_api.push_message(line_id_minou, TextSendMessage(text=text_message))


class SchedulerDto_status(Base):
    __tablename__ = "status"

    id = Column(Integer, Sequence("users_id_seq"), primary_key=True)
    is_payment = Column(Boolean)


class SchedulerDto_user(Base):
    __tablename__ = "users"

    id = Column(Integer, Sequence("users_id_seq"), primary_key=True)
    line_id = Column(Integer)


class SchedulerDto_event(Base):
    __tablename__ = "events"

    id = Column(Integer, Sequence("users_id_seq"), primary_key=True)
    line_id = Column(Integer)

# def dto_to_scheduler(dto: SchedulerDto):
#     return Scheduler(
#         id=dto.id,
#         line_id=dto.line_id,
#         is_payment=dto.is_payment

#     )


# def dtos_to_scheduler(dtos: list):
#     scheduler = []
#     for dto in dtos:
#         scheduler.append(dto_to_scheduler(dto))
#     return scheduler
