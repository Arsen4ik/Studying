create table employee
(
ID_Employee SERIAL not null constraint PK_Employee primary key,
Second_Name varchar (30) not null,
First_Name varchar (30) not null,
Niddle_Name varchar (30) null default ('Нет данных'),
Employee_Phone varchar (19) not null constraint UQ_Employee_Phone unique
constraint CH_Employee_Phone check (Employee_Phone similar to 
							'\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}') 
);

insert into Employee (Second_Name, First_Name, Employee_Phone)
values ('Arsenov', 'Arsen', '+7(696)696-69-69');
insert into Employee (Second_Name, First_Name, Employee_Phone)
values ('Arsenov2', 'Arsen2', '+7(696)696-69-62');
insert into Employee (Second_Name, First_Name, Niddle_Name, Employee_Phone)
values ('Arsenov3', 'Arsen3', 'Arsenovich', '+7(696)696-69-61');
select Second_Name|| ' ' ||First_Name|| ' ' ||Niddle_Name as "ФИО",
'телефон: '||Employee_Phone as "контактные данные" from Employee;


create table Post
(
	ID_Post SERIAL not null constraint PK_Post primary key,
	Name_Post varchar (50) not null constraint UQ_Name_Post unique,
	Post_Price decimal (38,2) not null constraint CH_Post_Price check (Post_Price >= 0)
);

insert into Post (Name_Post, Post_Price)
values ('директор', 215000.50),
('бухгалтер', 105000.50),
('менеджер', 225000.50),
('пиар-менеджер', 205000.50);
select * from Post;

create table Combination
(
	ID_Combination serial not null constraint PK_Combination primary key,
	Employee_ID int not null references Employee (ID_Employee),
	Post_ID int not null references Post (ID_Post),
	Post_Part decimal (4,1) null default (0.0) constraint CH_Post_Part check (Post_Part >= 0),
	Date_Time_Create timestamp null default (current_timestamp)
);

select id_employee from employee;
select id_post from post;

insert into Combination (Employee_ID, Post_ID, Post_Part)
values (4,1,1),
(5,2,0.2),
(6,3,0.1),
(6,4,1);

select second_name||' '||first_name||', телефон: '||employee_phone as "данные сотрудника",
name_post||', ставка: '||post_part||', оклад = '||post_part*post_price*0.87 as "данные по должности",
date_time_create as "дата создания"
from combination
inner join employee on ID_employee = employee_ID
inner join post on post_ID = ID_post
where niddle_name <> 'Нет данных'
order by date_time_create DESC;

select * from Combination;
update Combination set 
post_part = 0.5
where id_Combination = 18
