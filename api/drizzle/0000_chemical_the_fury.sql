CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(100),
	"email" varchar(50),
	"password" varchar(50)
);

CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(50),
	"content" varchar(256),
	"userId" integer
);

CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"categoryName" varchar(50),
	"iconName" varchar(256),
	"selectedColor" varchar(50),
	"userId" integer
);

CREATE TABLE IF NOT EXISTS "accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer,
	"categoryId" integer,
	"amount" integer,
	"date" varchar,
	"time" varchar,
	"transaction_type" varchar(50),
	"payee" varchar(256),
	"note" varchar(256)
);
