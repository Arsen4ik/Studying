Create table Students
(
ID_Student SERIAL not null constraint PK_Student primary key,
Lastname varchar(50) not null,
Firstname varchar(50) not null,
Patronomyx varchar(50) not null,
Sex varchar(3) not null,
Date_Of_Birth date not null,
Place_Of_Birth varchar(50) not null,
Passport_Issued_By  varchar(50) not null,
Passport_Series varchar(4) not null,
Passport_Number varchar(4) not null,
Phisical_Address varchar(50) not null,
Contact_Number varchar(13) not null,
CHIPN varchar(13) not null,
Expiration_Date_Of_CHIPN date not null
);

alter table Students add constraint CH_Sex check(Sex in ('муж', 'жен'))
alter table Students add constraint CH_Date_Of_Birth check(date_part('year',age(current_date,Date_Of_Birth)) > 16);
alter table Students add constraint CH_Passport_Series check(Passport_Series similar to '0000')
alter table Students add constraint CH_Passport_Number check(Passport_Number similar to '0000')
alter table Students drop constraint CH_Passport_Series
alter table Students drop constraint CH_Passport_Number
alter table Students add constraint CH_Passport_Series check(Passport_Series similar to '[0-9]{4}')
alter table Students add constraint UQ_Passport_Series unique (Passport_Series)
alter table Students add constraint CH_Passport_Number check(Passport_Number similar to '0000')
alter table Students drop constraint CH_Passport_Number
alter table Students add constraint CH_Passport_Number check(Passport_Number similar to '[0-9]{4}')
alter table Students add constraint UQ_Passport_Number unique (Passport_Number)
alter table Students add constraint CH_Contact_Number check(Contact_Number similar to '\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}') 
alter table Students add constraint CH_CHIPN check(CHIPN similar to '[0-9]{13}')
alter table Students add constraint UQ_CHIPN unique (CHIPN)
alter table Students add constraint CH_Expiration_Date_Of_CHIPN check (Expiration_Date_Of_CHIPN > current_date)

Create table Grouppa
(
ID_Grouppa int not null constraint PK_Grouppa primary key,
Name_Grouppa varchar(50) not null,
Individual_Schedule varchar(50) not null
);
alter table Grouppa alter ID_Grouppa type SERIAL
alter table Grouppa add constraint UQ_Name_Grouppa unique (Name_Grouppa)
insert into Grouppa (Name_Grouppa, Individual_Schedule) 
values ('AC-21', '17 уроков');
insert into Grouppa (Name_Grouppa, Individual_Schedule) 
values ('F-21', '19 уроков');
insert into Grouppa (Name_Grouppa, Individual_Schedule) 
values ('V-22', '15 уроков');
insert into Grouppa (Name_Grouppa, Individual_Schedule) 
values ('X-22', '20 уроков');
select Name_Grouppa as "группа", Individual_Schedule as "индивидуальный график" from Grouppa;

Create table Employee
(
ID_Employee int not null constraint PK_Employee primary key,
Lastname varchar(50) not null,
Firstname varchar(50) not null,
Patronomyx varchar(50) not null
);
insert into Employee (Lastname, Firstname, Patronomyx) 
values ('Алиев', 'Махмут', 'Ибрагимович')
insert into Employee (Lastname, Firstname, Patronomyx) 
values ('Волков', 'Дмитрий', 'Евгеньевич')
insert into Employee (Lastname, Firstname, Patronomyx) 
values ('Смитт', 'Джон', 'Николаевич')
insert into Employee (Lastname, Firstname, Patronomyx) 
values ('Ылаев', 'Владимир', 'Мамаев')
insert into Employee (Lastname, Firstname, Patronomyx) 
values ('Вячеслав', 'Влидиславов', 'Елисеевич')
insert into Employee (Lastname, Firstname, Patronomyx) 
values ('Кожедубов', 'Святород', 'Великославович')
select Lastname|| ' ' ||Firstname|| ' ' ||Patronomyx as "сотрудник" from Employee;

Create table The_Reason_Of_Decommission
(
ID_The_Reason_Of_Decommission int not null constraint PK_The_Reason_Of_Decommission primary key,
Name_Of_The_Reason_Of_Decommission varchar(50) not null
);
alter table The_Reason_Of_Decommission add constraint UQ_Name_Of_The_Reason_Of_Decommission unique (Name_Of_The_Reason_Of_Decommission)

Create table Enjine_Size
(
ID_Enjine int not null constraint PK_Enjine primary key,
Name_Types_Of_Enjine_Size varchar(50) not null
);
alter table Enjine_Size add constraint UQ_Name_Types_Of_Enjine_Size unique (Name_Types_Of_Enjine_Size)

Create table Drive
(
ID_Drive int not null constraint PK_Drive primary key,
Name_Drive varchar(50) not null
);
alter table Drive add constraint UQ_Name_Drive unique (Name_Drive)

Create table Gearbox
(
ID_Gearbox int not null constraint PK_Gearbox primary key,
Name_Gearbox varchar(50) not null
);
alter table Gearbox add constraint UQ_Name_Gearbox unique (Name_Gearbox)

Create table Car_Body
(
ID_Car_Body int not null constraint PK_Car_Body primary key,
Name_Car_Body varchar(50) not null
);
alter table Car_Body add constraint UQ_Name_Car_Body unique (Name_Car_Body)

Create table Brand
(
ID_Brand int not null constraint PK_Brand primary key,
Name_Brand varchar(50) not null
);
alter table Brand add constraint UQ_Name_Brand unique (Name_Brand)

Create table Certificate
(
ID_Certificate int not null constraint PK_Certificate primary key,
Name_Certificate varchar(50) not null,
Student_ID int not null references Students (ID_Student)
);
alter table Certificate add constraint UQ_Name_Certificate unique (Name_Certificate)

Create table Category
(
ID_Category int not null constraint PK_Category primary key,
Name_Category varchar(50) not null,
Certificate_ID int not null references Certificate (ID_Certificate)
);
alter table Category add constraint UQ_Name_Category unique (Name_Category)

Create table Lesson
(
ID_Lesson int not null constraint PK_Lesson primary key,
Name_Lesson varchar(50) not null,
Employee_ID int not null references Employee (ID_Employee)
);
alter table Lesson add constraint UQ_Name_Lesson unique (Name_Lesson)

Create table Model
(
ID_Model int not null constraint PK_Model primary key,
Name_Model varchar(50) not null,
Brand_ID int not null references Brand (ID_Brand)
);
alter table Model add constraint UQ_Name_Model unique (Name_Model)

Create table Decommission
(
ID_Decommission int not null constraint PK_Decommission primary key,
Name_Of_Decommission varchar(50) not null, 
Employee_ID int not null references Employee (ID_Employee),
The_Reason_Of_Decommission_ID int not null references The_Reason_Of_Decommission (ID_The_Reason_Of_Decommission)
);

Create table Car
(
ID_Car int not null constraint PK_Car primary key,
Country varchar(50) not null,
Car_Body_ID int not null references Car_Body (ID_Car_Body),
Model_ID int not null references Model (ID_Model),
Gearbox_ID int not null references Gearbox (ID_Gearbox),
Drive_ID int not null references Drive (ID_Drive),
Enjine_ID int not null references Enjine_Size (ID_Enjine),
Decommission_ID int not null references Decommission (ID_Decommission),
State_Registration_Number varchar(50) not null,
The_Region varchar(50) not null,
Time_Of_Using varchar(50) not null,
Period_Of_Expoitation varchar(50) not null
);
alter table Car add constraint UQ_State_Registration_Number unique (State_Registration_Number)
alter table Car alter column Period_Of_Expoitation type date USING period_of_expoitation::date;
alter table Car add constraint CH_Period_Of_Expoitation check (Period_Of_Expoitation > current_date)

Create table Practice_Course
(
ID_Practise_Course int not null constraint PK_Practise_Course primary key,
Min_Number_Practice_Lessons int not null,
Category_ID int not null references Category (ID_Category),
Employee_ID int not null references Employee (ID_Employee),
Car_ID int not null references Car (ID_Car),
Min_Number_City_Lessons int not null
);
alter table Practice_Course add constraint UQ_Min_Number_Practice_Lessons unique (Min_Number_Practice_Lessons)
alter table Practice_Course add constraint UQ_Min_Number_City_Lessons unique (Min_Number_City_Lessons)

Create table Practice_Course_In_Groups
(
ID_Course_Groups int not null constraint PK_Course_Groups primary key,
Grouppa_ID int not null references Grouppa (ID_Grouppa),
Course_ID int not null references Practice_Course (ID_Practise_Course)
);

Create table Lessons_In_Groups
(
ID_Lessons_In_Groups int not null constraint PK_Lessons_In_Groups primary key,
Grouppa_ID int not null references Grouppa (ID_Grouppa),
Lesson_ID int not null references Lesson (ID_Lesson)
);



SELECT count(*) FROM information_schema.tables 
where table_schema = 'public' and table_type = 'BASE TABLE';

SELECT table_name, count(column_Name) FROM information_schema.columns 
where table_schema = 'public' group by table_name;


