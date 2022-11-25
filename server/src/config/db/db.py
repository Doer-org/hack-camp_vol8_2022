from config.db.conn import get_conn
from sqlalchemy import create_engine
from sqlalchemy.engine import Engine
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
engine: Engine = create_engine(get_conn())
