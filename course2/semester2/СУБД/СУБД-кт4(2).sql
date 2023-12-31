Create table Students
(
ID_Student SERIAL not null constraint PK_Student primary key,
Lastname varchar(50) not null,
Firstname varchar(50) not null,
Patronomyx varchar(50) not null,
Sex varchar(3) not null constraint CH_Sex check(Sex in ('муж', 'жен')),
Date_Of_Birth date not null constraint CH_Date_Of_Birth check(date_part('year',age(current_date,Date_Of_Birth)) > 16),
Place_Of_Birth varchar(50) not null,
Passport_Issued_By  varchar(50) not null,
Passport_Series varchar(4) not null constraint UQ_Passport_Series unique constraint CH_Passport_Series check(Passport_Series similar to '[0-9]{4}'),
Passport_Number varchar(4) not null constraint UQ_Passport_Number unique constraint CH_Passport_Number check(Passport_Number similar to '[0-9]{4}'),
Phisical_Address varchar(50) not null,
Contact_Number varchar(13) not null constraint CH_Contact_Number check(Contact_Number similar to '\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}'),
CHIPN varchar(13) not null constraint UQ_CHIPN unique constraint CH_CHIPN check(CHIPN similar to '[0-9]{13}'),
Expiration_Date_Of_CHIPN date not null constraint CH_Expiration_Date_Of_CHIPN check(Expiration_Date_Of_CHIPN > current_date)
);
alter table Students alter column Contact_Number type varchar(16)
insert into Students (Lastname, Firstname, Patronomyx, Sex, Date_Of_Birth, Place_Of_Birth, 
					  Passport_Issued_By, Passport_Series, Passport_Number, Phisical_Address, 
					  Contact_Number, CHIPN, Expiration_Date_Of_CHIPN) 
values ('Алиев', 'Махмут', 'Ибрагимович', 'муж', '12.09.2000', 'г. Волгоград', 'МВД по Волгоградской области', '1235', '5000', 'ул. Чертановская, д.6, стр. 3', '+7(239)234-90-67', '0001120000000', '01.01.2030'),
('Волков', 'Дмитрий', 'Евгеньевич', 'муж', '12.09.2000', 'г. Волгоград', 'МВД по Волгоградской области', '1234', '5001', 'ул. Чертановская, д.6, стр. 4', '+7(239)234-90-68', '1001120000000', '02.01.2030'),
('Смитт', 'Джон', 'Николаевич', 'муж', '12.09.1980', 'г. Волгоград', 'МВД по Волгоградской области', '1231', '5002', 'ул. Чертановская, д.6, стр. 7', '+7(522)234-90-67', '4001120000000', '05.01.2030'),
('Ылаев', 'Владимир', 'Мамаев', 'муж', '02.09.2001', 'г. Волгоград', 'МВД по Волгоградской области', '1237', '5003', 'ул. Чертановская, д.6, стр. 5', '+7(239)234-44-56', '2001120000000', '03.01.2030'),
('Вячеслав', 'Влидиславов', 'Елисеевич', 'муж', '12.09.2003', 'г. Волгоград', 'МВД по Волгоградской области', '1240', '5004', 'ул. Чертановская, д.6, стр. 6', '+7(239)234-90-54', '3001120000000', '04.01.2030');
select LastName|| ' ' ||FirstName|| ' ' ||Patronomyx as "ФИО слушателей",
Sex as "Пол", Date_Of_Birth as "Дата рождения", Place_Of_Birth as "Место рождения",
Passport_Issued_By as "Кем выдан паспорт", Passport_Series|| ' ' ||Passport_Number as "Серия и номер паспорта",
Phisical_Address as "адрес фактического проживания", Contact_Number as "контактный телефон",
CHIPN as "номер полиса обязательного медецинского страхования",
Expiration_Date_Of_CHIPN as "дата прекращения срока действия полиса" from Students
order by Lastname ASC;
select * from Students

Create table Grouppa
(
ID_Grouppa SERIAL not null constraint PK_Grouppa primary key,
Name_Grouppa varchar(50) not null constraint UQ_Name_Grouppa unique,
Individual_Schedule varchar(50) not null
);
insert into Grouppa (Name_Grouppa, Individual_Schedule) 
values ('AC-21', '17 уроков');
insert into Grouppa (Name_Grouppa, Individual_Schedule) 
values ('F-21', '19 уроков');
insert into Grouppa (Name_Grouppa, Individual_Schedule) 
values ('V-22', '15 уроков');
insert into Grouppa (Name_Grouppa, Individual_Schedule) 
values ('X-22', '20 уроков');
select Name_Grouppa as "группа", Individual_Schedule as "индивидуальный график" from Grouppa
order by Name_Grouppa ASC;
select * from Grouppa

Create table Employee
(
ID_Employee SERIAL not null constraint PK_Employee primary key,
Lastname varchar(50) not null,
Firstname varchar(50) not null,
Patronomyx varchar(50) not null
);
insert into Employee (Lastname, Firstname, Patronomyx) 
values ('Алиев', 'Махмут', 'Ибрагимович'),
('Волков', 'Дмитрий', 'Евгеньевич'),
('Смитт', 'Джон', 'Николаевич'),
('Ылаев', 'Владимир', 'Мамаев'),
('Вячеслав', 'Влидиславов', 'Елисеевич'),
('Кожедубов', 'Святород', 'Великославович')
select LastName|| ' ' ||FirstName|| ' ' ||Patronomyx as "сотрудник" from Employee
order by Lastname ASC
select * from Employee

Create table The_Reason_Of_Decommission
(
ID_The_Reason_Of_Decommission SERIAL not null constraint PK_The_Reason_Of_Decommission primary key,
Name_Of_The_Reason_Of_Decommission varchar(50) not null constraint UQ_Name_Of_The_Reason_Of_Decommission unique
);
insert into The_Reason_Of_Decommission (Name_Of_The_Reason_Of_Decommission) 
values ('данные отсутствуют')
select Name_Of_The_Reason_Of_Decommission as "Причина списания" from The_Reason_Of_Decommission
order by Name_Of_The_Reason_Of_Decommission DESC
select * from The_Reason_Of_Decommission

Create table Enjine_Size
(
ID_Enjine SERIAL not null constraint PK_Enjine primary key,
Name_Types_Of_Enjine_Size varchar(50) not null constraint UQ_Name_Types_Of_Enjine_Size unique
);
insert into Enjine_Size (Name_Types_Of_Enjine_Size) 
values ('малолитражный'),
('среднелитражный'),
('многолитражный')
select Name_Types_Of_Enjine_Size as "Вид объема двигателя" from Enjine_Size
order by Name_Types_Of_Enjine_Size DESC
select * from Enjine_Size

Create table Drive
(
ID_Drive SERIAL not null constraint PK_Drive primary key,
Name_Drive varchar(50) not null constraint UQ_Name_Drive unique
);
insert into Drive (Name_Drive) 
values ('задний привод'),
('передний привод'),
('полный привод')
select Name_Drive as "Название привода" from Drive
order by Name_Drive ASC
select * from Drive

Create table Gearbox
(
ID_Gearbox SERIAL not null constraint PK_Gearbox primary key,
Name_Gearbox varchar(50) not null constraint UQ_Name_Gearbox unique
);
insert into Gearbox (Name_Gearbox) 
values ('механик'),
('робот.'),
('автомат')
select Name_Gearbox as "название КПП" from Gearbox
order by Name_Gearbox DESC
select * from Gearbox

Create table Car_Body
(
ID_Car_Body SERIAL not null constraint PK_Car_Body primary key,
Name_Car_Body varchar(50) not null constraint UQ_Name_Car_Body unique
);
insert into Car_Body (Name_Car_Body) 
values ('купе'),
('хетчебек'),
('кроссовер'),
('кабриолет'),
('седан')
select Name_Car_Body as "название кузова" from Car_Body
order by Name_Car_Body ASC
select * from Car_Body

Create table Brand
(
ID_Brand SERIAL not null constraint PK_Brand primary key,
Name_Brand varchar(50) not null constraint UQ_Name_Brand unique
);
insert into Brand (Name_Brand) 
values ('BMW'),
('Ford'),
('Haval'),
('Mersedez'),
('Lada')
select Name_Brand as "название марки" from Brand
order by Name_Brand ASC
select * from Brand

Create table Certificate
(
ID_Certificate SERIAL not null constraint PK_Certificate primary key,
Name_Certificate varchar(50) not null constraint UQ_Name_Certificate unique,
Student_ID int not null references Students(ID_Student)
);
insert into Certificate (Name_Certificate, Student_ID) 
values ('1000-A', 6),
('1000-B', 6),
('1000-C', 7),
('1000-D', 8),
('1000-E', 9)
select Name_Certificate as "название удостоверения", LastName|| ' ' ||FirstName|| ' ' ||Patronomyx as "Фио слушателя" from Certificate
inner join Students on Student_ID = ID_Student
order by Name_Certificate ASC
select * from students
select * from Certificate

Create table Category
(
ID_Category SERIAL not null constraint PK_Category primary key,
Name_Category varchar(50) not null constraint UQ_Name_Category unique,
Certificate_ID int not null references Certificate (ID_Certificate)
);
Alter table Category drop constraint UQ_Name_Category
insert into Category (Name_Category, Certificate_ID) 
values ('B', 61),
('BE', 62),
('C', 63),
('B', 64),
('CE', 65)
select Name_Category as "название категории", Name_Certificate as "название удостоверения" from Category
inner join Certificate on Certificate_ID = ID_Certificate
order by Name_Category ASC
select * from Category

Create table Lesson
(
ID_Lesson SERIAL not null constraint PK_Lesson primary key,
Name_Lesson varchar(50) not null constraint UQ_Name_Lesson unique,
Employee_ID int not null references Employee (ID_Employee)
);
insert into Lesson (Name_Lesson, Employee_ID) 
values ('сдан ', 5),
('не сдан ', 6)
select Name_Lesson as "название отметки", LastName|| ' ' ||FirstName|| ' ' ||Patronomyx as "сотрудник" from Lesson
inner join Employee on Employee_ID = ID_Employee
order by Name_Lesson ASC
select * from Lesson

Create table Model
(
ID_Model SERIAL not null constraint PK_Model primary key,
Name_Model varchar(50) not null constraint UQ_Name_Model unique,
Brand_ID int not null references Brand (ID_Brand)
);
insert into Model (Name_Model, Brand_ID) 
values ('X3', 1),
('Focus', 2),
('H9', 3),
('Benz A-class', 4),
('vesta', 5)
select Name_Model as "название модели", Name_Brand as "марка" from Model
inner join Brand on Brand_ID = ID_Brand
order by Name_Model ASC
select * from Model

Create table Decommission
(
ID_Decommission SERIAL not null constraint PK_Decommission primary key,
Name_Of_Decommission varchar(50) not null, 
Employee_ID int not null references Employee (ID_Employee),
The_Reason_Of_Decommission_ID int not null references The_Reason_Of_Decommission (ID_The_Reason_Of_Decommission)
);
insert into Decommission (Name_Of_Decommission, Employee_ID, The_Reason_Of_Decommission_ID) 
values ('данные отсутствуют', 6, 1)
select Name_Of_Decommission as "вид списания", LastName|| ' ' ||FirstName|| ' ' ||Patronomyx as "сотрудник", Name_Of_The_Reason_Of_Decommission as "причина списания" from Decommission
inner join Employee on Employee_ID = ID_Employee
inner join The_Reason_Of_Decommission on The_Reason_Of_Decommission_ID = ID_The_Reason_Of_Decommission
order by Name_Of_Decommission ASC
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
insert into Car (Country, Car_Body_ID, Model_ID, Gearbox_ID, Drive_ID, Enjine_ID, Decommission_ID,
				 State_Registration_Number, The_Region, Time_Of_Using, Period_Of_Expoitation) 
values ('Германия', 1, 1, 1, 1, 1, 1, 'с234кк', '16 РОС', '15 лет', '01.01.2030'),
('США', 2, 2, 2, 2, 2, 1, 'с234ап', '17 РОС', '16 лет', '01.01.2031'),
('Китай', 3, 3, 3, 3, 3, 1, 'с234пк', '54 РОС', '25 лет', '01.01.2032'),
('Германия', 4, 4, 2, 2, 2, 1, 'с233ык', '16 РОС', '13 лет', '01.01.2033'),
('Россия', 5, 5, 1, 1, 1, 1, 'с777ас', '01 РОС', '13 лет', '01.01.2034')
select Country as "Страна производитель", Name_Car_Body as "тип кузова",
Name_Model as "модель", Name_Gearbox as "тип кпп", Name_Drive as "тип привода",
Name_Types_Of_Enjine_Size as "объем двигателя", Name_Of_Decommission as "списание",
State_Registration_Number as "Государственный регистрационный номер", The_Region as "номер региона",
Time_Of_Using as "срок службы", Period_Of_Expoitation as "период эксплуатации" from Car
inner join Car_Body on Car_Body_ID = ID_Car_Body
inner join Model on Model_ID = ID_Model
inner join Gearbox on Gearbox_ID = ID_Gearbox
inner join Drive on Drive_ID = ID_Drive
inner join Enjine_Size on Enjine_ID = ID_Enjine
inner join Decommission on Decommission_ID = ID_Decommission
order by Country ASC
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
insert into Practice_Course (Min_Number_Practice_Lessons, Category_ID, Employee_ID, Car_ID, Min_Number_City_Lessons) 
values (5, 10, 1, 6, 3),
(7, 12, 3, 8, 2),
(8, 11, 5, 9, 4),
(9, 14, 6, 10, 5)
select Min_Number_Practice_Lessons as "Минимальное количество занятий на площадке",
Name_Category as "категория", LastName|| ' ' ||FirstName|| ' ' ||Patronomyx as "сотрудник",
State_Registration_Number as "Номер автомобиля", Min_Number_City_Lessons as "Минимальное количество выездов в город" from Practice_Course
inner join Category on Category_ID = ID_Category
inner join Employee on Employee_ID = ID_Employee
inner join Car on Car_ID = ID_Car
order by Min_Number_Practice_Lessons DESC
select * from Practice_Course

Create table Practice_Course_In_Groups
(
ID_Course_Groups SERIAL not null constraint PK_Course_Groups primary key,
Grouppa_ID int not null references Grouppa (ID_Grouppa),
Course_ID int not null references Practice_Course (ID_Practise_Course)
);
insert into Practice_Course_In_Groups (Grouppa_ID, Course_ID) 
values (1, 4),
(2, 5),
(3, 6),
(4, 7)
select Name_Grouppa as "группа", Category_ID as "практический курс" from Practice_Course_In_Groups
inner join Grouppa on Grouppa_ID = ID_Grouppa
inner join Practice_Course on Course_ID = ID_Practise_Course
order by Grouppa_ID ASC
select * from Practice_Course

Create table Lessons_In_Groups
(
ID_Lessons_In_Groups SERIAL not null constraint PK_Lessons_In_Groups primary key,
Grouppa_ID int not null references Grouppa (ID_Grouppa),
Lesson_ID int not null references Lesson (ID_Lesson)
);
insert into Lessons_In_Groups (Grouppa_ID, Lesson_ID) 
values (1, 1),
(2, 2),
(3, 1),
(4, 2)
select Name_Grouppa as "группа", Name_Lesson as "отметка за занятие" from Lessons_In_Groups
inner join Grouppa on Grouppa_ID = ID_Grouppa
inner join Lesson on Lesson_ID = ID_Lesson
order by Grouppa_ID ASC

select * from Lessons_In_Groups

-- drop table Lessons_In_Groups

-- -- --

-- 2

select * from Car_Body
update Car_Body set
	Name_Car_Body = 'купэ'
		where
			ID_Car_Body = 1;

delete from Car_Body
	where
		ID_Car_Body = 4;
-- здесь будет легальная ошибка
		
select * from Category
update Category set
	Name_Category = 'BE!'
		where
			ID_Category = 11;

delete from Category
	where
		ID_Category = 14;
-- здесь будет легальная ошибка
	
select * from Model
update Model set
	Name_Model = 'H10'
		where
			ID_Model = 3;
			
delete from Model
	where
		ID_Model = 4;
-- здесь будет легальная ошибка
	
select * from Practice_Course
update Practice_Course set
	Category_ID = 12
		where
			ID_Practise_Course = 6;
			
delete from Practice_Course
	where
		ID_Practise_Course = 4;
-- здесь будет легальная ошибка

select * from Lessons_In_Groups
update Lessons_In_Groups set
	Lesson_ID = 1
		where
			ID_Lessons_In_Groups = 2;
			
delete from Lessons_In_Groups
	where
		ID_Lessons_In_Groups = 3;
-- здесь будет легальная ошибка

-- 3

select * from Category
select Name_Category as "название категории", Name_Certificate as "название удостоверения" from Category
inner join Certificate on Certificate_ID = ID_Certificate
where Name_Category = 'B' or Name_Category = 'BE!'

select * from Practice_Course
select Min_Number_Practice_Lessons as "Минимальное количество занятий на площадке",
Name_Category as "категория", LastName|| ' ' ||FirstName|| ' ' ||Patronomyx as "сотрудник",
State_Registration_Number as "Номер автомобиля", Min_Number_City_Lessons as "Минимальное количество выездов в город" from Practice_Course
inner join Category on Category_ID = ID_Category
inner join Employee on Employee_ID = ID_Employee
inner join Car on Car_ID = ID_Car
where Min_Number_Practice_Lessons >= 8

select * from Car
select Name_Of_Decommission as "списание",
State_Registration_Number as "Государственный регистрационный номер",
The_Region as "номер региона",Time_Of_Using as "срок службы",
Period_Of_Expoitation as "период эксплуатации" from Car
inner join Decommission on Decommission_ID = ID_Decommission
where Name_Of_Decommission = 'данные отсутствуют'