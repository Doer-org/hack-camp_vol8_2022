-- DB切り替え
\c "hoge"

--テーブルを作成

CREATE TABLE "users" (
    "type"  INTEGER NOT NULL,
    "guest"    INTEGER NOT NULL
);
