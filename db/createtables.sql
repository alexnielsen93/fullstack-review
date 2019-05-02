create table users(
user_id serial primary key,
firstname varchar(50),
lastname varchar(50),
email varchar(100)
);
create table user_login(
    login_id serial primary key,
    username varchar(50),
    password text
    
);
create table balances(
    balance_id serial primary key,
    balance int
);