from flask import Blueprint

# api
api = Blueprint("health", __name__)


@api.route("/", methods=["GET"])
def health():
    return {"health": "good"}
