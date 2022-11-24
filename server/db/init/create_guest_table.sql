-- DB切り替え
\c "hoge"

--テーブルを作成

CREATE TABLE "guests" (
    "id"    SERIAL NOT NULL PRIMARY KEY,
    "event" INTEGER NOT NULL FOREIGN KEY
);
