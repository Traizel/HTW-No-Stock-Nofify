CREATE TABLE "item"
(
	"id" serial NOT NULL,
	"name" varchar(255),
	"sku" varchar(255) NOT NULL,
	"inventory_level" INTEGER,
	"level" varchar(255) DEFAULT 'Product'
);