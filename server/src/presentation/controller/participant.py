from flask import jsonify, request
from model.participant import Participant
from presentation.controller.status import status_to_json
from presentation.controller.user import user_to_json


def participant_to_json(p: Participant) -> dict:
    return {"user": user_to_json(p.user), "status": status_to_json(p.status)}


def participants_to_jsons(ps: list) -> list:
    psJson = []
    for p in ps:
        psJson.append(participant_to_json(p))
    return psJson
