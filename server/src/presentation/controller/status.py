from flask import jsonify, request
from model.status import Status


def status_to_json(s: Status) -> dict:
    return {
        "id": s.id,
        "is_payment": s.is_payment,
        "event_id": s.event_id,
        "user_id": s.user_id,
    }
