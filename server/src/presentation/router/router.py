from flask import Flask
from presentation.router import health, user, line

app = Flask(__name__)

app.register_blueprint(health.api)
app.register_blueprint(user.api)
app.register_blueprint(line.api)
