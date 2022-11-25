from flask import Flask
from presentation.router import health, user, event, health_line


app = Flask(__name__)

app.register_blueprint(health.api)
app.register_blueprint(user.api)
app.register_blueprint(event.api)
app.register_blueprint(health_line.api)
