-- DB切り替え
\c "hoge"

--テーブルを作成

CREATE TABLE "events" (
    "id"    SERIAL NOT NULL PRIMARY KEY,
    "name"  VARCHAR(255) NOT NULL,
    "created_at"   Timestamp NOT NULL,
    "sum_price"  INTEGER NOT NULL,
    "number"  INTEGER NOT NULL
);
