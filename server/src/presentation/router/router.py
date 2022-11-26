from flask import Flask
# from presentation.router import health, user, event, health_line, scheduler
from presentation.router import health, user, event, health_line, scheduler

app = Flask(__name__)

app.register_blueprint(health.api)
app.register_blueprint(user.api)
app.register_blueprint(event.api)
app.register_blueprint(health_line.api)
app.register_blueprint(scheduler.api)
# app.register_blueprint(scheduler.api)
