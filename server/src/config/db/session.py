from config.db.db import engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm.session import Session

session_class = sessionmaker(engine)
session: Session = session_class()
