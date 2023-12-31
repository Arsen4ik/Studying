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









Create table Grouppa
(
ID_Grouppa SERIAL not null constraint PK_Grouppa primary key,
Name_Grouppa varchar(50) not null constraint UQ_Name_Grouppa unique,
Individual_Schedule int not null
);
insert into Grouppa (Name_Grouppa, Individual_Schedule) 
values ('AC-21', 17),
('F-21', 19),
('V-22', 15),
('X-22', 20);
select Name_Grouppa as "группа", Individual_Schedule as "индивидуальный график" from Grouppa
order by Name_Grouppa ASC;
truncate table Grouppa;
-- select * from Grouppa

Create table Employee
(
ID_Employee SERIAL not null constraint PK_Employee primary key,
Lastname varchar(50) not null,
Firstname varchar(50) not null,
Patronomyx varchar(50) not null
);
-- insert into Employee (Lastname, Firstname, Patronomyx) 
-- values ('Алиев', 'Махмут', 'Ибрагимович'),
-- ('Волков', 'Дмитрий', 'Евгеньевич'),
-- ('Смитт', 'Джон', 'Николаевич'),
-- ('Ылаев', 'Владимир', 'Мамаев'),
-- ('Вячеслав', 'Влидиславов', 'Елисеевич'),
-- ('Кожедубов', 'Святород', 'Великославович')
-- select LastName|| ' ' ||FirstName|| ' ' ||Patronomyx as "сотрудник" from Employee
-- order by Lastname ASC


Create table The_Reason_Of_Decommission
(
ID_The_Reason_Of_Decommission SERIAL not null constraint PK_The_Reason_Of_Decommission primary key,
Name_Of_The_Reason_Of_Decommission varchar(50) not null constraint UQ_Name_Of_The_Reason_Of_Decommission unique
);
insert into The_Reason_Of_Decommission (Name_Of_The_Reason_Of_Decommission) 
values ('данные отсутствуют')
select Name_Of_The_Reason_Of_Decommission as "Причина списания" from The_Reason_Of_Decommission
order by Name_Of_The_Reason_Of_Decommission DESC

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

Create table Certificate
(
ID_Certificate SERIAL not null constraint PK_Certificate primary key,
Name_Certificate varchar(50) not null constraint UQ_Name_Certificate unique,
Student_ID int not null references Students(ID_Student)
);
insert into Certificate (Name_Certificate, Student_ID) 
values ('1000-A', 1),
('1000-B', 2),
('1000-C', 3),
('1000-D', 4),
('1000-E', 5)

-- select * from students
select Name_Certificate as "название удостоверения", LastName|| ' ' ||FirstName|| ' ' ||Patronomyx as "Фио слушателя" from Certificate
inner join Students on Student_ID = ID_Student
order by Name_Certificate ASC

select * from Certificate

Create table Category
(
ID_Category SERIAL not null constraint PK_Category primary key,
Name_Category varchar(50) not null constraint UQ_Name_Category unique,
Certificate_ID int not null references Certificate (ID_Certificate)
);
Alter table Category drop constraint UQ_Name_Category
insert into Category (Name_Category, Certificate_ID) 
values ('B', 6),
('BE', 7),
('C', 8),
('B', 9),
('CE', 10)
select Name_Category as "название категории", Name_Certificate as "название удостоверения" from Category
inner join Certificate on Certificate_ID = ID_Certificate
order by Name_Category ASC

select * from Employee
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

select * from Brand

Create table Model
(
ID_Model SERIAL not null constraint PK_Model primary key,
Name_Model varchar(50) not null constraint UQ_Name_Model unique,
Brand_ID int not null references Brand (ID_Brand)
);
select * from Lesson
insert into Model (Name_Model, Brand_ID) 
values ('X3', 1),
('Focus', 2),
('H9', 3),
('Benz A-class', 4),
('vesta', 5)
insert into Model(Name_Model, Brand_ID)
values('X4', 1),
('X5', 1),
('sedan', 5)

select Name_Model as "название модели", Name_Brand as "марка" from Model
inner join Brand on Brand_ID = ID_Brand
order by Name_Model ASC



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
select * from Gearbox
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


Create table Practice_Course
(
ID_Practise_Course SERIAL not null constraint PK_Practise_Course primary key,
Min_Number_Practice_Lessons int not null constraint UQ_Min_Number_Practice_Lessons unique,
Category_ID int not null references Category (ID_Category),
Employee_ID int not null references Employee (ID_Employee),
Car_ID int not null references Car (ID_Car),
Min_Number_City_Lessons int not null constraint UQ_Min_Number_City_Lessons unique
);
-- select * from Category
insert into Practice_Course (Min_Number_Practice_Lessons, Category_ID, Employee_ID, Car_ID, Min_Number_City_Lessons) 
values (5, 32, 1, 1, 3),
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
Practise_Course_ID int not null references Practice_Course (ID_Practise_Course)
);
drop table Practice_Course_In_Groups
select * from Practice_Course_In_Groups
insert into Practice_Course_In_Groups (Grouppa_ID, Practise_Course_ID) 
values (1, 4),
(2, 5),
(3, 6),
(4, 7)
select Name_Grouppa as "группа", Category_ID as "практический курс" from Practice_Course_In_Groups
inner join Grouppa on Grouppa_ID = ID_Grouppa
inner join Practice_Course on Course_ID = ID_Practise_Course
order by Grouppa_ID ASC

select * from Lesson


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




-- ///////////////

-- вывести ФИО учеников, название сертификатов, у которых категория прав B
select concat('фио: ', Lastname, ' ', SUBSTRING(Firstname from 1 for 1), ' ', SUBSTRING(Patronomyx from 1 for 1)) as "ФИО", name_certificate as "номер сертификата", Name_Category as "искомая категория" from Category
inner join Certificate on Certificate_ID = ID_Certificate
inner join Students on Student_ID = ID_Student
where Name_Category = 'B'

-- модели каких брендов больше всего распространены
select * from brand
select * from model

select Name_Brand as "название бренда", count(Brand_ID) as "Количество данного бренда" from Model
inner join Brand on ID_Brand = Brand_ID
group by Name_Brand
having count(Brand_ID) > 1
limit 2;

-- вывести номера и регионы автомобилей произведенных не в США или Германии
select State_Registration_Number as "Государственный регистрационный номер", The_Region as "номер региона" from car
		where Country <> 'США' and Country <> 'Германия';
		
-- вывести названия групп и ФИО их преподавателя
-- select Name_Grouppa as "названия групп", LastName|| ' ' ||FirstName|| ' ' ||Patronomyx as "преподаватель" from lessons_in_groups
-- inner join Grouppa on Grouppa_ID = ID_Grouppa
-- inner join Lesson on Lesson_ID = ID_Lesson
-- inner join Employee on Employee_ID = ID_Employee
-- -- -- --




-- у какой группы больше и меньше всего занятий
select Max(Individual_Schedule) as "больше всего занятий", MIN(Individual_Schedule) as "меньше всего занятий" from Grouppa;

-- кол моделей у брендов
select UPPER(Name_Brand) as "бренд", STRING_AGG(LOWER(Name_Model), ', ') as "модели",
count(Brand_ID) as "Количество моделей у данного бренда", case
	when count(Brand_ID) = 1 then 'мало'
	when count(Brand_ID) > 1 then 'достаточно'
	end as "сколько" from model
inner join Brand on ID_Brand = Brand_ID
group by Name_Brand;

-- вывести уникальный тип списания для автомобилей
select distinct(Name_Of_Decommission) from Car
inner join Decommission on Decommission_ID = ID_Decommission;

-- Вывести информацию, о номере и регионе машины, а также: дату ввода в экспл, дату вывода в экспл, отдельно год ввода в эспл и время которое пройдет с момента ввода на момент вывода из экспл.
select State_Registration_Number as "Государственный регистрационный номер",
The_Region as "номер региона", to_char(Period_Of_Expoitation, 'MM.DD.YYYY') as "период введения в эксплуатацию",
Period_Of_Expoitation + interval '10 years' as "период вывода из эксплуатации",
date_part('year', Period_Of_Expoitation) as "отдельно год ввода в эксплуатацию",
age(Period_Of_Expoitation + interval '10 years', Period_Of_Expoitation) as "время с ввода до вывода из экспл."
from car;


SELECT count(*) FROM information_schema.routines 
WHERE routine_type = 'FUNCTION' AND routine_schema = 'public';


-- вывести среднее значение занятий у групп
create or replace function Group_Num_Lessons()
returns decimal(38, 5)
language plpgsql
as $$
	declare p_Price decimal (38,5);
	begin
		p_Price := Round(AVG(individual_schedule),1) AS "среднее количество занятий" FROM grouppa;
		return p_Price;
	end;
$$;
SELECT Group_Num_Lessons() AS "среднее количество занятий";

--  вывести по номеру автомобиля типы: марки, модели, кузова автомобиля
create or replace function Car_Info(p_State_Registration_Number varchar(6))
returns table (Brand varchar(50), Model varchar(50), Car_Body varchar(50))
language plpgsql
as $$
	begin
		return query select
		Name_Brand, Name_Car_Body,
		Name_Model from Car
		inner join Car_Body on Car_Body_ID = ID_Car_Body
		inner join Model on Model_ID = ID_Model
		inner join Brand on Brand_ID = ID_Brand
		where State_Registration_Number = p_State_Registration_Number
		group by Name_Brand, Name_Car_Body, Name_Model;
	end;
$$;
select * from Car_Info('с234кк')



-- ////////




create or replace procedure Students_insert (p_Lastname varchar(50), p_Firstname varchar(50),
			p_Patronomyx varchar(50), p_Sex varchar(3), p_Date_Of_Birth date, p_Place_Of_Birth varchar(50),
			p_Passport_Issued_By varchar(50), p_Passport_Series varchar(4), p_Passport_Number varchar(4), 
			p_Phisical_Address varchar(50), p_Contact_Number varchar(16), p_CHIPN varchar(13),
			p_Expiration_Date_Of_CHIPN date)
language plpgsql
as $$
	declare p_Exsist_Pasport int = count(*) from Students
	where Passport_Series = p_Passport_Series and Passport_Number = p_Passport_Number;
	begin
			if(p_Exsist_Pasport > 0) then
				raise notice 'такой серия-номер паспорт нельзя';
			else
				insert into Students (Lastname, Firstname, Patronomyx, Sex, Date_Of_Birth, Place_Of_Birth,
						Passport_Issued_By, Passport_Series, Passport_Number, Phisical_Address,
						Contact_Number, CHIPN, Expiration_Date_Of_CHIPN) 
				values (p_Lastname, p_Firstname, p_Patronomyx, p_Sex, p_Date_Of_Birth, p_Place_Of_Birth,
						p_Passport_Issued_By, p_Passport_Series, p_Passport_Number, p_Phisical_Address,
						p_Contact_Number, p_CHIPN, p_Expiration_Date_Of_CHIPN); 
			end if;
	end;
$$;
create or replace procedure Students_update (p_ID_Student int, p_Lastname varchar(50), p_Firstname varchar(50),
			p_Patronomyx varchar(50), p_Sex varchar(3), p_Date_Of_Birth date, p_Place_Of_Birth varchar(50),
			p_Passport_Issued_By varchar(50), p_Passport_Series varchar(4), p_Passport_Number varchar(4), 
			p_Phisical_Address varchar(50), p_Contact_Number varchar(16), p_CHIPN varchar(13),
			p_Expiration_Date_Of_CHIPN date)
language plpgsql
as $$
	declare p_Exsist_Pasport int = count(*) from Students
	where Passport_Series = p_Passport_Series and Passport_Number = p_Passport_Number;
	begin
			if (p_Exsist_Pasport > 0) then
				raise notice 'такой серия-номер паспорт нельзя';
			else
					update Students set
						Lastname = p_Lastname,
						Firstname = p_Firstname,
						Patronomyx = p_Patronomyx,
						Sex = p_Sex,
						Date_Of_Birth = p_Date_Of_Birth,
						Place_Of_Birth = p_Place_Of_Birth,
						Passport_Issued_By = p_Passport_Issued_By,
						Passport_Series = p_Passport_Series,
						Passport_Number = p_Passport_Number,
						Phisical_Address = p_Phisical_Address,
						Contact_Number = p_Contact_Number,
						CHIPN = p_CHIPN,
						Expiration_Date_Of_CHIPN = p_Expiration_Date_Of_CHIPN
						where
								ID_Student = p_ID_Student; 
			end if;
		end;
$$;
create or replace procedure Students_delete (p_ID_Student int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Certificate
	where Student_ID = p_ID_Student;
	begin
		if (p_any_child_record > 0) then
			raise notice 'имя студента не может быть удалено, так как в таблице "сертификат", есть связанные данные!"';
		else
			delete from Students 
				where
					ID_Student = p_ID_Student;
		end if;
	end;
$$;
-- call Students_delete(1)
-- truncate table Students
select * from Students;


create or replace procedure Employee_insert(p_Lastname varchar(50), p_Firstname varchar(50), p_Patronomyx varchar(50))
language plpgsql
as $$
	begin
		insert into Employee (Lastname, Firstname, Patronomyx) 
		values (p_Lastname, p_Firstname, p_Patronomyx); 
	end;
$$;
-- drop procedure Grouppa_update (p_ID_Grouppa int, p_Name_Grouppa varchar(50), p_Individual_Schedule varchar(50))
create or replace procedure Employee_update (p_ID_Employee int, p_Lastname varchar(50), p_Firstname varchar(50), p_Patronomyx varchar(50))
language plpgsql
as $$
	begin
		update Employee set
			Lastname = p_Lastname,
			Firstname = p_Firstname,
			Patronomyx = p_Patronomyx
			where
				ID_Employee = p_ID_Employee; 
		end;
$$;
create or replace procedure Employee_delete (p_ID_Employee int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Lesson
	where Employee_ID = p_ID_Employee;
	begin
		if (p_any_child_record > 0) then
			raise notice 'имя сотрудника не может быть удалено, так как в таблице "занятие", есть связанные данные!"';
		else
			delete from Employee 
				where
					ID_Employee = p_ID_Employee;
		end if;
	end;
$$;


create or replace procedure Practice_Course_insert (p_Min_Number_Practice_Lessons int, p_Category_ID int, p_Employee_ID int, p_Car_ID int, p_Min_Number_City_Lessons int)
language plpgsql
as $$
	declare p_Exsist_NumberL int = count(*) from Practice_Course
	where Min_Number_Practice_Lessons = p_Min_Number_Practice_Lessons or Min_Number_City_Lessons = p_Min_Number_City_Lessons;
	begin
			if(p_Exsist_NumberL > 0) then
				raise notice 'есть повторения в количестве занятий в городе и практических, есть повторения';
			else
					insert into Practice_Course (Min_Number_Practice_Lessons, Category_ID, Employee_ID, Car_ID, Min_Number_City_Lessons) 
					values (p_Min_Number_Practice_Lessons, p_Category_ID, p_Employee_ID, p_Car_ID, p_Min_Number_City_Lessons); 
			end if;
	end;
$$;
create or replace procedure Practice_Course_update (p_ID_Practise_Course int, p_Min_Number_Practice_Lessons int, p_Category_ID int, p_Employee_ID int, p_Car_ID int, p_Min_Number_City_Lessons int)
language plpgsql
as $$
	declare p_Exsist_NumberL int = count(*) from Practice_Course
	where Min_Number_Practice_Lessons = p_Min_Number_Practice_Lessons or Min_Number_City_Lessons = p_Min_Number_City_Lessons;
	begin
			if(p_Exsist_NumberL > 0) then
				raise notice 'есть повторения в количестве занятий в городе и практических, есть повторения';
			else
				update Practice_Course set
					Min_Number_Practice_Lessons = p_Min_Number_Practice_Lessons,
					Category_ID = p_Category_ID,
					Employee_ID = p_Employee_ID,
					Car_ID = p_Car_ID,
					Min_Number_City_Lessons = p_Min_Number_City_Lessons
					where
							ID_Practise_Course = p_ID_Practise_Course;
			end if;
		end;
$$;
create or replace procedure Practice_Course_delete (p_ID_Practise_Course int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Practice_Course_In_Groups
	where Practise_Course_ID = p_ID_Practise_Course;
	begin
		if (p_any_child_record > 0) then
			raise notice 'этот практический курс не может быть удален, так как в таблице "практический курс у групп", есть связанные данные!"';
		else
			delete from Practice_Course 
				where
					ID_Practise_Course = p_ID_Practise_Course;
		end if;
	end;
$$;
select * from Practice_Course

-- /////

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";  
create table practice_city
(
	ID_practice_city uuid default uuid_generate_v4() constraint PK_practice_city primary key,
	Name_student varchar not null,
	Name_Employee varchar not null,
	Pr_Min_Number_Practice_Lessons int not null,
	Pr_Min_Number_City_Lessons int not null,
	time_Record TIMESTAMP null DEFAULT(CURRENT_TIMESTAMP)
);
-- drop table practice_city
select * from practice_city

-- ///

call Practice_Course_insert(7002, 34, 4, 1, 2002)
call Practice_Course_insert(7009, 36, 2, 1, 2009)
call Practice_Course_insert(7004, 32, 1, 1, 2004)
call Practice_Course_insert(7005, 33, 3, 1, 2006)
call Practice_Course_insert(7006, 35, 5, 1, 2005)

-- ///

create or replace function fc_practice_city_Insert()
returns trigger
language plpgsql
as $$
	begin
			insert into practice_city (Name_student, Name_Employee, Pr_Min_Number_Practice_Lessons, Pr_Min_Number_City_Lessons)
			values ( 
					(select concat('фио: ', Lastname, ' - ', SUBSTRING(Firstname from 1 for 1), ' - ', SUBSTRING(Patronomyx from 1 for 1)) from students
					 inner join certificate on student_id = id_student
					 inner join category on certificate_id = id_certificate
					 where id_category = New.category_id),
					(select concat('фио: ', Lastname, ' - ', SUBSTRING(Firstname from 1 for 1), ' - ', SUBSTRING(Patronomyx from 1 for 1)) from Employee where ID_Employee = New.Employee_ID),
					(New.Min_Number_Practice_Lessons),
					(New.Min_Number_City_Lessons)
				);
			raise notice 'Insert record complete!';
		return new;
	end;
$$;

select * from students
select * from category
select * from certificate

select * from employee
select * from car
select * from practice_course

-- 					(select concat('фио: ', Lastname, ' - ', SUBSTRING(Firstname from 1 for 1), ' - ', SUBSTRING(Patronomyx from 1 for 1)) from students
-- 					 inner join certificate on id_student = student_id
-- 					 inner join category on id_certificate = certificate_id
-- 					 inner join practice_course on ID_category = category_id
-- 					 where practise_course_id = New.id_practise_course),

-- drop trigger tg_practice_city_update on Practice_Course;
-- drop function fc_practice_city_update();

create trigger tg_practice_city_Insert
after insert or update on Practice_Course
for each row 
execute procedure fc_practice_city_Insert();

-- ///

-- call Practice_Course_update(62, 7009, 32, 1, 1, 2009)
-- call Practice_Course_insert(7003, 32, 1, 1, 2003)

-- ///


create or replace function fc_practice_city_Update()
returns trigger
language plpgsql
as $$
	begin
		insert into practice_city (Name_student, Name_Employee, Pr_Min_Number_Practice_Lessons, Pr_Min_Number_City_Lessons)
			values ( 
					(select concat('фио: ', Lastname, ' - ', SUBSTRING(Firstname from 1 for 1), ' - ', SUBSTRING(Patronomyx from 1 for 1)) from students
					 inner join certificate on student_id = id_student
					 inner join category on certificate_id = id_certificate
					 where id_category = New.category_id),
					(select concat('фио: ', Lastname, ' - ', SUBSTRING(Firstname from 1 for 1), ' - ', SUBSTRING(Patronomyx from 1 for 1)) from Employee where ID_Employee = New.Employee_ID),
					(New.Min_Number_Practice_Lessons),
					(New.Min_Number_City_Lessons)
				);
			raise notice 'Update record complete!';
		return new;
	end;
$$;

create trigger tg_practice_city_Update
after insert or update on Practice_Course
for each row 
execute procedure fc_practice_city_Update();






create or replace function fc_practice_city_Delete()
returns trigger
language plpgsql
as $$
	begin
		insert into practice_city (Name_student, Name_Employee, Pr_Min_Number_Practice_Lessons, Pr_Min_Number_City_Lessons)
			values ( 
					(select concat('фио: ', Lastname, ' - ', SUBSTRING(Firstname from 1 for 1), ' - ', SUBSTRING(Patronomyx from 1 for 1)) from students
					 inner join certificate on student_id = id_student
					 inner join category on certificate_id = id_certificate
					 where id_category = New.category_id),
					(select concat('фио: ', Lastname, ' - ', SUBSTRING(Firstname from 1 for 1), ' - ', SUBSTRING(Patronomyx from 1 for 1)) from Employee where ID_Employee = New.Employee_ID),
					(New.Min_Number_Practice_Lessons),
					(New.Min_Number_City_Lessons)
				);
			raise notice 'Update record complete!';
		return new;
	end;
$$;

create trigger tg_practice_city_delete
after insert or update on Practice_Course
for each row 
execute procedure fc_practice_city_delete();



-- update practice_course set
-- 	Min_Number_City_Lessons = 777
-- 		where id_practise_course = 63;

-- create or replace function fc_practice_city_Insert_Update()
-- returns trigger
-- language plpgsql
-- as $$
-- 	declare p_Name_student varchar (15) := distinct(Lastname) from Practice_Course
-- 		inner join Category on Category_ID = ID_Category
-- 		inner join Certificate on Certificate_ID = ID_Certificate
-- 		inner join Students on Student_ID = ID_Student
-- 		where Student_ID = New.Student_ID;
-- 	begin
-- 		if ((select count(*) from practice_city where Name_student_Number = p_Name_student) > 0) then
-- 			update practice_city set
-- 				Pr_Min_Number_Practice_Lessons = (select Pr_Min_Number_Practice_Lessons from Practice_Course where ID_Practise_Course = New.Practise_Course_ID),
-- 				Pr_Min_Number_City_Lessons = (select Pr_Min_Number_City_Lessons from Practice_Course where ID_Practise_Course = New.Practise_Course_ID),
-- 				Change_Record = CURRENT_TIMESTAMP
-- 					where
-- 						Name_student = p_Name_student;
-- 			raise notice 'Update record complete!';
-- 		else
-- 			insert into practice_city (Name_student, Name_Employee, Min_Number_Practice_Lessons, Min_Number_City_Lessons)
-- 			values ( 
-- 					(select concat('фио: ', Lastname, ' - ', SUBSTRING(Firstname from 1 for 1), ' - ', SUBSTRING(Patronomyx from 1 for 1)) from Students where ID_Student = New.Student_ID),
-- 					(select concat('фио: ', Lastname, ' - ', SUBSTRING(Firstname from 1 for 1), ' - ', SUBSTRING(Patronomyx from 1 for 1)) from Employee where ID_Employee = New.Employee_ID),
-- 					(select Pr_Min_Number_Practice_Lessons from Practice_Course where ID_Practise_Course = New.Practise_Course_ID),
-- 					(select Pr_Min_Number_City_Lessons from Practice_Course where ID_Practise_Course = New.Practise_Course_ID)
-- 				);
-- 			raise notice 'Insert record complete!';
-- 		end if;
-- 		return new;
-- 	end;
-- $$;
-- create trigger tg_practice_city_Insert_Update
-- after insert or update on Practice_Course
-- for each row 
-- execute procedure fc_practice_city_Insert_Update();

-- drop function fc_practice_city_Insert_update()
-- drop trigger tg_practice_city_Insert_update on Practice_Course;
-- drop function fc_practice_city_Insert_update();



-- /////////////
-- drop function Employee_Practice_City
create or replace function Employee_Practice_City(p_Name_Employee varchar)
returns table (Min_Number_Practice_Lessons integer, Min_Number_City_Lessons integer)
language plpgsql
as $$
	begin
		return query select Pr_Min_Number_Practice_Lessons, Pr_Min_Number_City_Lessons from Practice_City
						where Name_Employee similar to '%'||p_Name_Employee||'%';
	end; 
$$;
select * from Employee_Practice_City('Ылаев - В - М');

create or replace function Student_Practice_City(p_Name_student varchar)
returns table (Min_Number_Practice_Lessons integer, Min_Number_City_Lessons integer)
language plpgsql
as $$
	begin
		return query select Pr_Min_Number_Practice_Lessons, Pr_Min_Number_City_Lessons from Practice_City
						where Name_student similar to '%'||p_Name_student||'%';
	end; 
$$;
select * from Student_Practice_City('Волков - Д - Е');




-- //////////////////
create or replace view Employee_Decomission("инд номер авто", "причина списания", "ФИО ответственного сотрудника", "дата списания", "срок службы авто")
as
	select State_Registration_Number, Name_Of_The_Reason_Of_Decommission, Lastname||' '||Firstname||' '||Patronomyx, Period_Of_Expoitation, Time_Of_Using from Car
	inner join Decommission on Decommission_ID = ID_Decommission
	inner join Employee on Employee_ID = ID_Employee
	inner join The_Reason_Of_Decommission on The_Reason_Of_Decommission_ID = ID_The_Reason_Of_Decommission

select * from Employee_Decomission
select * from car

select * from Employee


-- select * from grouppa

-- grant execute on function Group_num_lessons to teacher;
-- grant select on grouppa to teacher;
-- select * from Car_Info('с234кк')

grant select, insert, update, delete on Employee to Administrator;