-- The CREATE TABLE statement is used to create a new table in a database.

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100)
);

-- A copy of an existing table can also be created using CREATE TABLE AS SELECT FROM.

CREATE TABLE orders AS
SELECT     customer_id,email
FROM customers;