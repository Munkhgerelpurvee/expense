CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(256),
	"email" varchar(256),
	"password" varchar(256)
);

CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"content" varchar(256),
	"userId" integer
);

CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"categoryName" varchar(256),
	"iconName" varchar(256),
	"selectedColor" varchar(256)
);

CREATE TABLE IF NOT EXISTS "records" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer,
	"categoryId" integer,
	"amount" integer,
	"date" varchar,
	"time" varchar,
	"transaction_type" varchar(256),
	"payee" varchar(256),
	"note" varchar(256)
);
