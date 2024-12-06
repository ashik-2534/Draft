-- A copy of an existing table can also be created using CREATE TABLE AS SELECT FROM.

CREATE TABLE orders AS
SELECT     customer_id,email
FROM customers;