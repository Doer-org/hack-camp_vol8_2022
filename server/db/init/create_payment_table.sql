-- DB切り替え
\c "hoge"

--テーブルを作成

CREATE TABLE "users" (
    "guest"    INTEGER NOT NULL,
    "event"  INTEGER NOT NULL,
    "paid_amount"  INTEGER NOT NULL,
    "not_paid_amount"  INTEGER NOT NULL
);
