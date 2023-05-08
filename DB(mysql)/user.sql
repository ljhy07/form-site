create database if not exists friend;
use friend;
alter user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';
FLUSH PRIVILEGES;

create table if not exists users(
    userId varchar(45) primary key,
    password varchar(50) not null,
    name varchar(30) not null,
    email varchar(75),
    phone varchar(45) not null
);

insert into users (userId, password, name, email, phone) values('ljhy', '12345', '이재현', 'ij184399@gmail.com', '010-7476-3869');

select * from users;