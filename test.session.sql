-- SECTION FOR CREATION OF TABLES

-- @block
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- @block
CREATE TABLE Tasks(
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    content VARCHAR(255),
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);


-- SECTION FOR INSERTIONS INTO TABLES

-- @block
INSERT INTO Users (username)
VALUES
    ("Huncho"),
    ("Chris");

-- @block
INSERT INTO Tasks (user_id, content)
VALUES
    (1, "Wash the dishes"),
    (1, "Walk the dog"),
    (2, "Call Chris Brown"),
    (2, "Do grocery shopping");


-- SECTION FOR DELETIONS
-- @block
DELETE FROM Users;

-- @block 
DELETE FROM Tasks;



-- SECTION FOR SELECTIONS
-- @block
SELECT * FROM Users;

-- @block
SELECT * FROM Tasks;



-- SECTION FOR DROPPING OF TABLES
-- @block
DROP TABLE Users;

-- @block
DROP TABLE Tasks;


-- SECTION FOR JOINS 
-- @block
SELECT * FROM Users
INNER JOIN Tasks
ON Tasks.user_id = Users.id;



-- research on INDEX in SQL
-- INNER JOIN : joins left table to right based on pairs
-- LEFT JOIN : joins ALL left table rows to right table even if some left rows have no right pairs
-- RIGHT JOIN : joins ALL right table rows to left table even if some right rows have no left pairs
-- FULL OUTER JOIN : joins all from left and right (paired and unpaired)
