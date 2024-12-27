CREATE TABLE "item" (
	"item_no" VARCHAR(255) NOT NULL UNIQUE,
	"item_name" TEXT,
	"pic" VARCHAR(255),
	"category" VARCHAR(255),
	"series" VARCHAR(255),
	"price" SMALLINT,
	"sales" SMALLINT,
	"spec1" VARCHAR(255),
	"spec2" VARCHAR(255),
	"desc" VARCHAR(255),
	PRIMARY KEY("item_no")
);

--因為order是sql的保留字 所以table要改名字
--CREATE TABLE "order" (
CREATE TABLE "cuod" (
	"order_no" INT8 NOT NULL UNIQUE,
	"item_no" VARCHAR(255) NOT NULL,
	"qty" INT4 NOT NULL,
	"fix_price" SMALLINT NOT NULL,
	"buyer" VARCHAR(255) NOT NULL,
	"buyer_ext" VARCHAR(255) NOT NULL,
	"pay_ind" CHAR(1) NOT NULL,
	"proce_datetime" TIMESTAMP NOT NULL,
	PRIMARY KEY("order_no")
);
