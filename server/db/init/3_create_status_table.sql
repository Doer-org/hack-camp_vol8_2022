-- DB切り替え
\c "hoge"

--テーブルを作成

CREATE TABLE "status" (
    "id"            SERIAL NOT NULL PRIMARY KEY,
    "is_payment"    BOOLEAN NOT NULL,
    "user_id"       INTEGER NOT NULL,
    "event_id"      INTEGER NOT NULL,
    foreign key ("user_id") references "users"("id")
        ON DELETE CASCADE, --userテーブルとstatusテーブルを一緒に削除できる
    foreign key ("event_id") references "events"("id")
        ON DELETE CASCADE
);

INSERT INTO "status" ("is_payment", "user_id", "event_id")
VALUES ('true', 1, 2);

INSERT INTO "status" ("is_payment", "user_id", "event_id")
VALUES ('false', 2, 1);
