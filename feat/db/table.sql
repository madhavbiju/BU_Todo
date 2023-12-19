create database todo;
use todo;
CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    description VARCHAR(100)
);
