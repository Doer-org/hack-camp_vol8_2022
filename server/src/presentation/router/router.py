from flask import Flask
from flask_cors import CORS
from presentation.router import (
    event,
    health,
    health_line,
    scheduler,
    status,
    user,
)

app = Flask(__name__)

app.register_blueprint(health.api)
app.register_blueprint(user.api)
app.register_blueprint(event.api)
app.register_blueprint(status.api)
app.register_blueprint(health_line.api)
app.register_blueprint(scheduler.api)

# CORS(app, resources={"/*": {"origins": "*"}})
CORS(app)


@app.after_request
def after_request(res):
    # res.headers.add(
    #     "Access-Control-Allow-Origin", "https://warikan-generator.vercel.app"
    # )
    res.headers.add("Access-Control-Allow-Headers", "Content-Type")
    res.headers.add(
        "Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS"
    )
    res.headers.add("Access-Control-Allow-Credentials", "true")
    return res
