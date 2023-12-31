
create table users
(
username varchar not null,
userpassword int not null constraint UQ_Userpassword unique
)
insert into users(username, userpassword)
values('Azamat', 1007)
select * from users

create table inputs
(
inputEl varchar not null
)
insert into inputs(inputEl)
values('first!')
select * from inputs