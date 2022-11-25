import os


# DBとの接続情報文字列を取得する
def get_conn() -> str:
    if os.getenv("ENV") == "dev":
        DATABASE = "postgresql"
        USER = os.getenv("POSTGRES_USER")
        PASSWORD = os.getenv("POSTGRES_PASSWORD")
        HOST = os.getenv("CONTAINER_NAME")
        PORT = "5432"
        DB_NAME = os.getenv("POSTGRES_DB")
        return f"{DATABASE}://{USER}:{PASSWORD}@{HOST}:{PORT}/{DB_NAME}"
    elif os.getenv("ENV") == "prd":
        return os.getenv("DATABASE_URL")
    else:
        print("error")
