CREATE TABLE "item"
(
	"id" serial NOT NULL,
	"name" varchar(255),
	"sku" varchar(255) DEFAULT 'NO SKU',
	"inventory_level" INTEGER,
	"level" varchar(255) DEFAULT 'Product',
	"dead" boolean DEFAULT false,
	"date" DATE NOT NULL DEFAULT NOW(),
	"notes" varchar(50),
	"reason" varchar(255) DEFAULT 'temp'
);