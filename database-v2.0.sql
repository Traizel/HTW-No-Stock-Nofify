CREATE TABLE "user" (
"id" serial NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" VARCHAR (320) UNIQUE NOT NULL,
	"password" varchar(255) NOT NULL,
	"created_at" DATE NOT NULL DEFAULT 'now()',
	"last_login" DATE,
	"role" varchar(10)
    
);

CREATE TABLE "item"
(
	"id" serial NOT NULL,
	"name" varchar(255),
	"sku" varchar(255) NOT NULL,
	"inventory_level" INTEGER,
	"enabled" BOOLEAN DEFAULT 'true'
);