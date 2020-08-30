-- drop database burgers_db;

-- CREATE DATABASE burgers_db;
-- USE burgers_db;

-- CREATE TABLE burgers (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   burger_name VARCHAR(100),
--   devoured BOOLEAN DEFAULT false
-- );
-- SELECT * from burgers;


drop database burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100),
  devoured BOOLEAN DEFAULT false,
  createdAT TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);

SELECT * from burgers;