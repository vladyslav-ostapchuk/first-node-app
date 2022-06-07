create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(266),
    surname VARCHAR(266) 
)
create TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(266),
    content VARCHAR(266),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id) 
)