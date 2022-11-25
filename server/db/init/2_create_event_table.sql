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
VALUES ('nomi', 1, 20000, 2);

INSERT INTO "events" ("name", "admin_id", "total_amount", "number")
VALUES ('usj', 3, 10000, 10);
