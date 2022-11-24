-- DB切り替え
\c "hoge"

--テーブルを作成

CREATE TABLE "users" (
    "id"            SERIAL NOT NULL PRIMARY KEY,
    "display_name"  VARCHAR(255) NOT NULL,
    "line_id"       VARCHAR(255) NOT NULL,
    "picture_url"   VARCHAR(255)
);

-- --テーブルにデータを挿入
INSERT INTO "users" ("display_name", "line_id", "picture_url")
VALUES ('Asano', 'takuma1123', 'GOLLASO');

INSERT INTO "users" ("display_name", "line_id", "picture_url")
VALUES ('Doan', 'ritu1123', 'GOAL');
