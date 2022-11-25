-- DB切り替え!!¥
\c "hoge"

--テーブルを作成

CREATE TABLE "events" (
    "id"            SERIAL NOT NULL PRIMARY KEY,
    "name"          VARCHAR(255) NOT NULL,
    "admin_id"      INTEGER NOT NULL,
    "total_amount"  INTEGER NOT NULL,
    "number"        INTEGER NOT NULL,
    "created_at"    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- --テーブルにデータを挿入
INSERT INTO "events" ("name", "admin_id", "total_amount", "number")
VALUES ('Asano', 1123, 37, 307);

INSERT INTO "events" ("name", "admin_id", "total_amount", "number")
VALUES ('Doan', 1234, 37, 307);
