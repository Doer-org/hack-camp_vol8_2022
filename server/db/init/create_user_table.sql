-- DB切り替え
\c "hoge"

--テーブルを作成

CREATE TABLE "users" (
    "id"    SERIAL NOT NULL PRIMARY KEY,
    "name"  VARCHAR(255) NOT NULL,
    "LINE_ID"   VARCHAR(255) NOT NULL,
    "type"  INTEGER NOT NULL,
    "icon"  VARCHAR(255)
);

-- --テーブルにデータを挿入
INSERT INTO "users" ("name", "LINE_ID", "type", "icon")
VALUES ('Asano', 'takuma1123', 2, "GOLLASO");

INSERT INTO "users" ("name", "LINE_ID", "type", "icon")
VALUES ('Doan', "ritu1123", 1, "GOAL");
