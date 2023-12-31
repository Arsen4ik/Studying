Create table Students
(
ID_Student SERIAL not null constraint PK_Student primary key,
Lastname varchar(50) not null,
Firstname varchar(50) not null,
Patronomyx varchar(50) not null,
Sex varchar(3) not null constraint CH_Sex check(Sex in ('муж', 'жен')),
Date_Of_Birth date not null constraint CH_Date_Of_Birth check(date_part('year',age(current_date,Date_Of_Birth)) > 16),
Place_Of_Birth varchar(50) not null,
Passport_Issued_By varchar(50) not null,
Passport_Series varchar(4) not null constraint CH_Passport_Series check(Passport_Series similar to '[0-9]{4}'),
Passport_Number varchar(4) not null constraint CH_Passport_Number check(Passport_Number similar to '[0-9]{4}'),
Phisical_Address varchar(50) not null,
Contact_Number varchar(16) not null constraint CH_Contact_Number check(Contact_Number similar to '\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}'),
CHIPN varchar(13) not null constraint UQ_CHIPN unique constraint CH_CHIPN check(CHIPN similar to '[0-9]{13}'),
Expiration_Date_Of_CHIPN date not null constraint CH_Expiration_Date_Of_CHIPN check(Expiration_Date_Of_CHIPN > current_date)
);
insert into Students (Lastname, Firstname, Patronomyx, Sex, Date_Of_Birth, Place_Of_Birth, 
					  Passport_Issued_By, Passport_Series, Passport_Number, Phisical_Address, 
					  Contact_Number, CHIPN, Expiration_Date_Of_CHIPN) 
values ('Алиев', 'Махмут', 'Ибрагимович', 'муж', '12.09.2000', 'г. Волгоград', 'МВД по Волгоградской области', '1235', '5000', 'ул. Чертановская, д.6, стр. 3', '+7(239)234-90-67', '0001120', '01.01.2030'),
('Волков', 'Дмитрий', 'Евгеньевич', 'муж', '12.09.2000', 'г. Волгоград', 'МВД по Волгоградской области', '1234', '5001', 'ул. Чертановская, д.6, стр. 4', '+7(239)234-90-68', '10011200', '02.01.2030'),
('Смитт', 'Джон', 'Николаевич', 'муж', '12.09.1980', 'г. Волгоград', 'МВД по Волгоградской области', '1231', '5002', 'ул. Чертановская, д.6, стр. 7', '+7(522)234-90-67', '40011200', '05.01.2030'),
('Ылаев', 'Владимир', 'Мамаев', 'муж', '02.09.2001', 'г. Волгоград', 'МВД по Волгоградской области', '1237', '5003', 'ул. Чертановская, д.6, стр. 5', '+7(239)234-44-56', '2001120', '03.01.2030'),
('Вячеслав', 'Влидиславов', 'Елисеевич', 'муж', '12.09.2003', 'г. Волгоград', 'МВД по Волгоградской области', '1240', '5004', 'ул. Чертановская, д.6, стр. 6', '+7(239)234-90-54', '30011200', '04.01.2030');
select LastName|| ' ' ||FirstName|| ' ' ||Patronomyx as "ФИО слушателей",
Sex as "Пол", Date_Of_Birth as "Дата рождения", Place_Of_Birth as "Место рождения",
Passport_Issued_By as "Кем выдан паспорт", Passport_Series|| ' ' ||Passport_Number as "Серия и номер паспорта",
Phisical_Address as "адрес фактического проживания", Contact_Number as "контактный телефон",
CHIPN as "номер полиса обязательного медецинского страхования",
Expiration_Date_Of_CHIPN as "дата прекращения срока действия полиса" from Students
order by Lastname ASC;
select * from Students;



Create table Grouppa
(
ID_Grouppa SERIAL not null constraint PK_Grouppa primary key,
Name_Grouppa varchar(50) not null constraint UQ_Name_Grouppa unique,
Individual_Schedule varchar(50) not null
);
select * from Grouppa

Create table Employee
(
ID_Employee SERIAL not null constraint PK_Employee primary key,
Lastname varchar(50) not null,
Firstname varchar(50) not null,
Patronomyx varchar(50) not null
);
select * from Employee



Create table The_Reason_Of_Decommission
(
ID_The_Reason_Of_Decommission SERIAL not null constraint PK_The_Reason_Of_Decommission primary key,
Name_Of_The_Reason_Of_Decommission varchar(50) not null constraint UQ_Name_Of_The_Reason_Of_Decommission unique
);
select * from The_Reason_Of_Decommission



Create table Enjine_Size
(
ID_Enjine SERIAL not null constraint PK_Enjine primary key,
Name_Types_Of_Enjine_Size varchar(50) not null constraint UQ_Name_Types_Of_Enjine_Size unique
);
select * from Enjine_Size



Create table Drive
(
ID_Drive SERIAL not null constraint PK_Drive primary key,
Name_Drive varchar(50) not null constraint UQ_Name_Drive unique
);
select * from Drive



Create table Gearbox
(
ID_Gearbox SERIAL not null constraint PK_Gearbox primary key,
Name_Gearbox varchar(50) not null constraint UQ_Name_Gearbox unique
);
select * from Gearbox



Create table Car_Body
(
ID_Car_Body SERIAL not null constraint PK_Car_Body primary key,
Name_Car_Body varchar(50) not null constraint UQ_Name_Car_Body unique
);
select * from Car_Body



Create table Brand
(
ID_Brand SERIAL not null constraint PK_Brand primary key,
Name_Brand varchar(50) not null constraint UQ_Name_Brand unique
);
select * from Brand




Create table Certificate
(
ID_Certificate SERIAL not null constraint PK_Certificate primary key,
Name_Certificate varchar(50) not null constraint UQ_Name_Certificate unique,
Student_ID int not null references Students(ID_Student)
);
-- create or replace view Certificate
select * from Certificate




Create table Category
(
ID_Category SERIAL not null constraint PK_Category primary key,
Name_Category varchar(50) not null,
Certificate_ID int not null references Certificate (ID_Certificate)
);
select * from Category

Create table Lesson
(
ID_Lesson SERIAL not null constraint PK_Lesson primary key,
Name_Lesson varchar(50) not null constraint UQ_Name_Lesson unique,
Employee_ID int not null references Employee (ID_Employee)
);
select * from Lesson

Create table Model
(
ID_Model SERIAL not null constraint PK_Model primary key,
Name_Model varchar(50) not null constraint UQ_Name_Model unique,
Brand_ID int not null references Brand (ID_Brand)
);
select * from Model

Create table Decommission
(
ID_Decommission SERIAL not null constraint PK_Decommission primary key,
Name_Of_Decommission varchar(50) not null, 
Employee_ID int not null references Employee (ID_Employee),
The_Reason_Of_Decommission_ID int not null references The_Reason_Of_Decommission (ID_The_Reason_Of_Decommission)
);
select * from Decommission

Create table Car
(
ID_Car SERIAL not null constraint PK_Car primary key,
Country varchar(50) not null,
Car_Body_ID int not null references Car_Body (ID_Car_Body),
Model_ID int not null references Model (ID_Model),
Gearbox_ID int not null references Gearbox (ID_Gearbox),
Drive_ID int not null references Drive (ID_Drive),
Enjine_ID int not null references Enjine_Size (ID_Enjine),
Decommission_ID int not null references Decommission (ID_Decommission),
State_Registration_Number varchar(50) not null constraint UQ_State_Registration_Number unique,
The_Region varchar(50) not null,
Time_Of_Using varchar(50) not null,
Period_Of_Expoitation date not null constraint CH_Period_Of_Expoitation check(Period_Of_Expoitation > current_date)
);
select * from Car

Create table Practice_Course
(
ID_Practise_Course SERIAL not null constraint PK_Practise_Course primary key,
Min_Number_Practice_Lessons int not null constraint UQ_Min_Number_Practice_Lessons unique,
Category_ID int not null references Category (ID_Category),
Employee_ID int not null references Employee (ID_Employee),
Car_ID int not null references Car (ID_Car),
Min_Number_City_Lessons int not null constraint UQ_Min_Number_City_Lessons unique
);
select * from Practice_Course

Create table Practice_Course_In_Groups
(
ID_Course_Groups SERIAL not null constraint PK_Course_Groups primary key,
Grouppa_ID int not null references Grouppa (ID_Grouppa),
Practise_Course_ID int not null references Practice_Course (ID_Practise_Course)
);
drop table Practice_Course
select * from Practice_Course_In_Groups


create or replace view Grouppa_Practice_Employee("имя группы", "индивидуальный график", "инструктор","кол-во практ. занятий пл. и в гор.")
as
	select Name_Grouppa, Individual_Schedule,'ФИО инструктора: '||Lastname||' '||Firstname||' '||Patronomyx,'площадка: '||Min_Number_Practice_Lessons||' - город: '||Min_Number_City_Lessons from Practice_Course_In_Groups
	inner join Grouppa on Grouppa_ID = ID_Grouppa
	inner join Practice_Course on Practise_Course_ID = ID_Practise_Course
	inner join Employee on Employee_ID = ID_Employee
select * from Grouppa_Practice_Employee



Create table Lessons_In_Groups
(
ID_Lessons_In_Groups SERIAL not null constraint PK_Lessons_In_Groups primary key,
Grouppa_ID int not null references Grouppa (ID_Grouppa),
Lesson_ID int not null references Lesson (ID_Lesson)
);
select * from Lessons_In_Groups
