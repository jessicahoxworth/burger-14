DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int
    AUTO INCREMENT NOT NULL,
    burger_name varchar
    (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
);
