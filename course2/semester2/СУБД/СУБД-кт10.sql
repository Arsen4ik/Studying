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
select * from Students;



Create table Grouppa
(
ID_Grouppa SERIAL not null constraint PK_Grouppa primary key,
Name_Grouppa varchar(50) not null constraint UQ_Name_Grouppa unique,
Individual_Schedule varchar(50) not null
);
create or replace procedure Grouppa_insert (p_Name_Grouppa varchar(50), p_Individual_Schedule varchar(50))
language plpgsql
as $$
	begin
		insert into Grouppa (Name_Grouppa, Individual_Schedule) 
		values (p_Name_Grouppa, p_Individual_Schedule); 
		exception when others
		then
			raise notice 'такое имя группы уже занято!';
	end;
$$;
-- drop procedure Grouppa_update (p_ID_Grouppa int, p_Name_Grouppa varchar(50), p_Individual_Schedule varchar(50))
create or replace procedure Grouppa_update (p_ID_Grouppa int, p_Name_Grouppa varchar(50), p_Individual_Schedule varchar(50))
language plpgsql
as $$
	begin
		update Grouppa set
			Name_Grouppa = p_Name_Grouppa,
			Individual_Schedule = p_Individual_Schedule
			where
					ID_Grouppa = p_ID_Grouppa; 
			exception when others
			then
				raise notice 'такое имя группы уже занято!';
		end;
$$;
-- drop procedure Grouppa_delete(p_ID_Grouppa int)
create or replace procedure Grouppa_delete (p_ID_Grouppa int)
language plpgsql
as $$
	declare p_any_child_record1 int := count(*) from Practice_Course_In_Groups
	where Grouppa_ID = p_ID_Grouppa;
	declare p_any_child_record2 int := count(*) from Lessons_In_Groups
	where Grouppa_ID = p_ID_Grouppa;
	begin
		if (p_any_child_record1 > 0) or (p_any_child_record2 > 0)  then
			raise notice 'имя группы не может быть удалено, так как есть связанные данные!"';
		else
			delete from Grouppa 
				where
					ID_Grouppa = p_ID_Grouppa;
		end if;
	end;
$$;
-- call Grouppa_insert('2P2', '2 months')
-- call Grouppa_insert('2P3', '3 months')
call Grouppa_delete(1)
select * from Grouppa


Create table Employee
(
ID_Employee SERIAL not null constraint PK_Employee primary key,
Lastname varchar(50) not null,
Firstname varchar(50) not null,
Patronomyx varchar(50) not null
);
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
call Employee_insert('арсен', 'арсенов', 'арсенович')
select * from Employee



Create table The_Reason_Of_Decommission
(
ID_The_Reason_Of_Decommission SERIAL not null constraint PK_The_Reason_Of_Decommission primary key,
Name_Of_The_Reason_Of_Decommission varchar(50) not null constraint UQ_Name_Of_The_Reason_Of_Decommission unique
);
create or replace procedure The_Reason_Of_Decommission_insert (p_Name_Of_The_Reason_Of_Decommission varchar(50))
language plpgsql
as $$
	begin
		insert into The_Reason_Of_Decommission (Name_Of_The_Reason_Of_Decommission) 
		values (p_Name_Of_The_Reason_Of_Decommission); 
		exception when others
		then
			raise notice 'такое тип списания уже занят!';
	end;
$$;
create or replace procedure The_Reason_Of_Decommission_update (p_ID_The_Reason_Of_Decommission int, p_Name_Of_The_Reason_Of_Decommission varchar(50))
language plpgsql
as $$
	begin
		update The_Reason_Of_Decommission set
			Name_Of_The_Reason_Of_Decommission = p_Name_Of_The_Reason_Of_Decommission
			where
					ID_The_Reason_Of_Decommission = p_ID_The_Reason_Of_Decommission; 
			exception when others
			then
				raise notice 'такое тип списания уже занят!';
		end;
$$;
create or replace procedure The_Reason_Of_Decommission_delete (p_ID_The_Reason_Of_Decommission int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Decommission
	where The_Reason_Of_Decommission_ID = p_ID_The_Reason_Of_Decommission;
	begin
		if (p_any_child_record > 0) then
			raise notice 'имя группы не может быть удалено, так как в таблице "практика у групп", есть связанные данные!"';
		else
			delete from The_Reason_Of_Decommission 
				where
					ID_The_Reason_Of_Decommission = p_ID_The_Reason_Of_Decommission;
		end if;
	end;
$$;
select * from The_Reason_Of_Decommission



Create table Enjine_Size
(
ID_Enjine SERIAL not null constraint PK_Enjine primary key,
Name_Types_Of_Enjine_Size varchar(50) not null constraint UQ_Name_Types_Of_Enjine_Size unique
);
create or replace procedure Enjine_Size_insert (p_Name_Types_Of_Enjine_Size varchar(50))
language plpgsql
as $$
	begin
		insert into Enjine_Size (Name_Types_Of_Enjine_Size) 
		values (p_Name_Types_Of_Enjine_Size); 
		exception when others
		then
			raise notice 'такой объем двигателя уже занят!';
	end;
$$;
create or replace procedure Enjine_Size_update (p_ID_Enjine int, p_Name_Types_Of_Enjine_Size varchar(50))
language plpgsql
as $$
	begin
		update Enjine_Size set
			Name_Types_Of_Enjine_Size = p_Name_Types_Of_Enjine_Size
			where
					ID_Enjine = p_ID_Enjine; 
			exception when others
			then
				raise notice 'такой объем двигателя уже занят!';
		end;
$$;
create or replace procedure Enjine_Size_delete (p_ID_Enjine int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Car
	where Enjine_ID = p_ID_Enjine;
	begin
		if (p_any_child_record > 0) then
			raise notice 'объем двигателя не может быть удален, так как в таблице "машины", есть связанные данные!';
		else
			delete from Enjine_Size 
				where
					ID_Enjine = p_ID_Enjine;
		end if;
	end;
$$;
select * from Enjine_Size



Create table Drive
(
ID_Drive SERIAL not null constraint PK_Drive primary key,
Name_Drive varchar(50) not null constraint UQ_Name_Drive unique
);
create or replace procedure Drive_insert (p_Name_Drive varchar(50))
language plpgsql
as $$
	begin
		insert into Drive (Name_Drive) 
		values (p_Name_Drive); 
		exception when others
		then
			raise notice 'такое тип привода уже занят!';
	end;
$$;
create or replace procedure Drive_update (p_ID_Drive int, p_Name_Drive varchar(50))
language plpgsql
as $$
	begin
		update Drive set
			Name_Drive = p_Name_Drive
			where
					ID_Drive = p_ID_Drive; 
			exception when others
			then
				raise notice 'такое тип привода уже занят!';
		end;
$$;
create or replace procedure Drive_delete (p_ID_Drive int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Car
	where Drive_ID = p_ID_Drive;
	begin
		if (p_any_child_record > 0) then
			raise notice 'тип привода не может быть удален, так как в таблице "машины", есть связанные данные!';
		else
			delete from Drive 
				where
					ID_Drive = p_ID_Drive;
		end if;
	end;
$$;
select * from Drive



Create table Gearbox
(
ID_Gearbox SERIAL not null constraint PK_Gearbox primary key,
Name_Gearbox varchar(50) not null constraint UQ_Name_Gearbox unique
);
create or replace procedure Gearbox_insert (p_Name_Gearbox varchar(50))
language plpgsql
as $$
	begin
		insert into Gearbox (Name_Gearbox) 
		values (p_Name_Gearbox); 
		exception when others
		then
			raise notice 'такое тип кпп уже занят!';
	end;
$$;
create or replace procedure Gearbox_update (p_ID_Gearbox int, p_Name_Gearbox varchar(50))
language plpgsql
as $$
	begin
		update Gearbox set
			Name_Gearbox = p_Name_Gearbox
			where
					ID_Gearbox = p_ID_Gearbox; 
			exception when others
			then
				raise notice 'такое тип кпп уже занят!';
		end;
$$;
create or replace procedure Gearbox_delete (p_ID_Gearbox int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Car
	where Gearbox_ID = p_ID_Gearbox;
	begin
		if (p_any_child_record > 0) then
			raise notice 'тип кпп не может быть удален, так как в таблице "машины", есть связанные данные!';
		else
			delete from Gearbox 
				where
					ID_Gearbox = p_ID_Gearbox;
		end if;
	end;
$$;
select * from Gearbox



Create table Car_Body
(
ID_Car_Body SERIAL not null constraint PK_Car_Body primary key,
Name_Car_Body varchar(50) not null constraint UQ_Name_Car_Body unique
);
create or replace procedure Car_Body_insert (p_Name_Car_Body varchar(50))
language plpgsql
as $$
	begin
		insert into Car_Body (Name_Car_Body) 
		values (p_Name_Car_Body); 
		exception when others
		then
			raise notice 'такой тип кузова уже занят!';
	end;
$$;
create or replace procedure Car_Body_update (p_ID_Car_Body int, p_Name_Car_Body varchar(50))
language plpgsql
as $$
	begin
		update Car_Body set
			Name_Car_Body = p_Name_Car_Body
			where
					ID_Car_Body = p_ID_Car_Body; 
			exception when others
			then
				raise notice 'такой тип кузова уже занят!';
		end;
$$;
create or replace procedure Car_Body_delete (p_ID_Car_Body int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Car
	where Car_Body_ID = p_ID_Car_Body;
	begin
		if (p_any_child_record > 0) then
			raise notice 'такой тип кузова не может быть удален, так как в таблице "практика у групп", есть связанные данные!';
		else
			delete from Car_Body 
				where
					ID_Car_Body = p_ID_Car_Body;
		end if;
	end;
$$;
select * from Car_Body



Create table Brand
(
ID_Brand SERIAL not null constraint PK_Brand primary key,
Name_Brand varchar(50) not null constraint UQ_Name_Brand unique
);
create or replace procedure Brand_insert (p_Name_Brand varchar(50))
language plpgsql
as $$
	declare p_New_Number varchar (8);
	declare p_Part_Number varchar (8);
	declare p_step int;
	begin
		if (p_Name_Brand = ' ') then
					p_New_Number := '';
			p_Part_Number := count(*)+1 from Brand;
			p_step := 8 - length(p_Part_Number);
				for i in 1..p_step loop
					p_Name_Brand := p_Name_Brand||'0';		
				end loop;
			insert into Brand (Name_Brand)
			values ('тип-'||p_New_Number||p_Part_Number);
		else
			insert into Brand (Name_Brand) 
			values (p_Name_Brand); 
		end if;
		exception when others
		then
			raise notice 'такое тип марки уже занят!';
	end;
$$;
-- drop procedure Brand_insert
create or replace procedure Brand_update (p_ID_Brand int, p_Name_Brand varchar(50))
language plpgsql
as $$
	declare p_New_Number varchar (8);
	declare p_Part_Number varchar (8);
	declare p_step int;
	begin
		if (p_Name_Brand = ' ') then
					p_New_Number := '';
			p_Part_Number := count(*)+1 from Brand;
			p_step := 8 - length(p_Part_Number);
				for i in 1..p_step loop
					p_Name_Brand := p_Name_Brand||'0';		
				end loop;
			update Brand set
			Name_Brand = 'тип-'||p_New_Number||p_Part_Number
			where
					ID_Brand = p_ID_Brand; 
		else
			update Brand set
			Name_Brand = p_Name_Brand
			where
					ID_Brand = p_ID_Brand;  
		end if;
		exception when others
		then
			raise notice 'такое тип марки уже занят!';
	end;
$$;
create or replace procedure Brand_delete (p_ID_Brand int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Model
	where Brand_ID = p_ID_Brand;
	begin
		if (p_any_child_record > 0) then
			raise notice 'такой тип марки не может быть удален, так как в таблице "модель", есть связанные данные!';
		else
			delete from Brand 
				where
					ID_Brand = p_ID_Brand;
		end if;
	end;
$$;
-- call Brand_insert('lada')
select * from Brand




Create table Certificate
(
ID_Certificate SERIAL not null constraint PK_Certificate primary key,
Name_Certificate varchar(50) not null constraint UQ_Name_Certificate unique,
Student_ID int not null references Students(ID_Student)
);
create or replace procedure Certificate_insert (p_Name_Certificate varchar(50), p_Student_ID int)
language plpgsql
as $$
	begin
		insert into Certificate (Name_Certificate, Student_ID) 
		values (p_Name_Certificate, p_Student_ID); 
		exception when others
		then
			raise notice 'этот номер сертификата уже занят!';
	end;
$$;
create or replace procedure Certificate_update (p_ID_Certificate int, p_Name_Certificate varchar(50), p_Student_ID int)
language plpgsql
as $$
	begin
		update Certificate set
			Name_Certificate = p_Name_Certificate,
			Student_ID = p_Student_ID
			where
					ID_Certificate = p_ID_Certificate; 
			exception when others
			then
				raise notice 'этот номер сертификата уже занят!';
		end;
$$;
create or replace procedure Certificate_delete (p_ID_Certificate int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Category
	where Certificate_ID = p_ID_Certificate;
	begin
		if (p_any_child_record > 0) then
			raise notice 'этот номер сертификата не может быть удален, так как в таблице "категория", есть связанные данные!"';
		else
			delete from Certificate 
				where
					ID_Certificate = p_ID_Certificate;
		end if;
	end;
$$;
select * from students
select * from Certificate




Create table Category
(
ID_Category SERIAL not null constraint PK_Category primary key,
Name_Category varchar(50) not null,
Certificate_ID int not null references Certificate (ID_Certificate)
);
create or replace procedure Category_insert (p_Name_Category varchar(50), p_Certificate_ID int)
language plpgsql
as $$
	begin
		insert into Category (Name_Category, Certificate_ID) 
		values (p_Name_Category, p_Certificate_ID); 
	end;
$$;
-- drop procedure Category_update
create or replace procedure Category_update (p_ID_Category int, p_Name_Category varchar(50), p_Certificate_ID int)
language plpgsql
as $$
	begin
		update Category set
			Name_Category = p_Name_Category,
			Certificate_ID = p_Certificate_ID
			where
					ID_Category = p_ID_Category; 
		end;
$$;
create or replace procedure Category_delete (p_ID_Category int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Practice_Course
	where Category_ID = p_ID_Category;
	begin
		if (p_any_child_record > 0) then
			raise notice 'этот тип категории не может быть удален, так как в таблице "практический курс", есть связанные данные!"';
		else
			delete from Category 
				where
					ID_Category = p_ID_Category;
		end if;
	end;
$$;
select * from Category

Create table Lesson
(
ID_Lesson SERIAL not null constraint PK_Lesson primary key,
Name_Lesson varchar(50) not null constraint UQ_Name_Lesson unique,
Employee_ID int not null references Employee (ID_Employee)
);
create or replace procedure Lesson_insert (p_Name_Lesson varchar(50), p_Employee_ID int)
language plpgsql
as $$
	begin
		insert into Lesson (Name_Lesson, Employee_ID) 
		values (p_Name_Lesson, p_Employee_ID); 
		exception when others
		then
			raise notice 'этот тип занятия уже есть!';
	end;
$$;
create or replace procedure Lesson_update (p_ID_Lesson int, p_Name_Lesson varchar(50), p_Employee_ID int)
language plpgsql
as $$
	begin
		update Lesson set
			Name_Lesson = p_Name_Lesson,
			Employee_ID = p_Employee_ID
			where
					ID_Lesson = p_ID_Lesson; 
			exception when others
			then
				raise notice 'этот тип занятия уже есть!';
		end;
$$;
create or replace procedure Lesson_delete (p_ID_Lesson int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Lessons_In_Groups
	where Lesson_ID = p_ID_Lesson;
	begin
		if (p_any_child_record > 0) then
			raise notice 'этот тип занятия не может быть удален, так как в таблице "занятия у групп", есть связанные данные!"';
		else
			delete from Lesson 
				where
					ID_Lesson = p_ID_Lesson;
		end if;
	end;
$$;
call Lesson_insert('driving', 1)
select * from Lesson

Create table Model
(
ID_Model SERIAL not null constraint PK_Model primary key,
Name_Model varchar(50) not null constraint UQ_Name_Model unique,
Brand_ID int not null references Brand (ID_Brand)
);
create or replace procedure Model_insert (p_Name_Model varchar(50), p_Brand_ID int)
language plpgsql
as $$
	begin
		insert into Model (Name_Model, Brand_ID) 
		values (p_Name_Model, p_Brand_ID); 
		exception when others
		then
			raise notice 'этот тип модели уже есть!';
	end;
$$;
create or replace procedure Model_update (p_ID_Model int, p_Name_Model varchar(50), p_Brand_ID int)
language plpgsql
as $$
	begin
		update Model set
			Name_Model = p_Name_Model,
			Brand_ID = p_Brand_ID
			where
					ID_Model = p_ID_Model; 
			exception when others
			then
				raise notice 'этот тип модели уже есть!';
		end;
$$;
create or replace procedure Model_delete (p_ID_Model int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Car
	where Model_ID = p_ID_Model;
	begin
		if (p_any_child_record > 0) then
			raise notice 'этот тип модели не может быть удален, так как в таблице "машины", есть связанные данные!"';
		else
			delete from Model 
				where
					ID_Model = p_ID_Model;
		end if;
	end;
$$;
select * from Model

Create table Decommission
(
ID_Decommission SERIAL not null constraint PK_Decommission primary key,
Name_Of_Decommission varchar(50) not null, 
Employee_ID int not null references Employee (ID_Employee),
The_Reason_Of_Decommission_ID int not null references The_Reason_Of_Decommission (ID_The_Reason_Of_Decommission)
);
create or replace procedure Decommission_insert (p_Name_Of_Decommission varchar(50), p_Employee_ID int, p_The_Reason_Of_Decommission_ID int)
language plpgsql
as $$
	begin
		insert into Decommission (Name_Of_Decommission, Employee_ID, The_Reason_Of_Decommission_ID) 
		values (p_Name_Of_Decommission, p_Employee_ID, p_The_Reason_Of_Decommission_ID); 
	end;
$$;
create or replace procedure Decommission_update (p_ID_Decommission int, p_Name_Of_Decommission varchar(50), p_Employee_ID int, p_The_Reason_Of_Decommission_ID int)
language plpgsql
as $$
	begin
		update Decommission set
			Name_Of_Decommission = p_Name_Of_Decommission,
			Employee_ID = p_Employee_ID,
			The_Reason_Of_Decommission_ID = p_The_Reason_Of_Decommission_ID
			where
					ID_Decommission = p_ID_Decommission; 
		end;
$$;
create or replace procedure Decommission_delete (p_ID_Decommission int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Car
	where Decommission_ID = p_ID_Decommission;
	begin
		if (p_any_child_record > 0) then
			raise notice 'этот тип списания не может быть удален, так как в таблице "машины", есть связанные данные!"';
		else
			delete from Decommission 
				where
					ID_Decommission = p_ID_Decommission;
		end if;
	end;
$$;
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
create or replace procedure Car_insert (p_Country varchar(50), p_Car_Body_ID int, p_Model_ID int,
								 p_Gearbox_ID int, p_Drive_ID int, p_Enjine_ID int,
								 p_Decommission_ID int, p_State_Registration_Number varchar(50),
								 p_The_Region varchar(50), p_Time_Of_Using varchar(50),
								 p_Period_Of_Expoitation date)
language plpgsql
as $$
	declare p_Exsist_Car int = count(*) from Car
	where State_Registration_Number = p_State_Registration_Number;
	begin
			if(p_Exsist_Pasport > 0) then
				raise notice 'такой номер автоиобиля уже есть';
			else
				insert into Car (Country, Car_Body_ID, Model_ID, Gearbox_ID, Drive_ID,
								 Enjine_ID, Decommission_ID, State_Registration_Number, The_Region,
								 Time_Of_Using, Period_Of_Expoitation) 
				values (p_Country, p_Car_Body_ID, p_Model_ID, p_Gearbox_ID, p_Drive_ID,
						p_Enjine_ID, p_Decommission_ID, p_State_Registration_Number, p_The_Region,
						p_Time_Of_Using, p_Period_Of_Expoitation); 
			end if;
	end;
$$;
create or replace procedure Car_update (p_ID_Car int, p_Country varchar(50), p_Car_Body_ID int,
										p_Model_ID int, p_Gearbox_ID int, p_Drive_ID int,
										p_Enjine_ID int, p_Decommission_ID int,
										p_State_Registration_Number varchar(50),
										p_The_Region varchar(50), p_Time_Of_Using varchar(50),
									    p_Period_Of_Expoitation date)
language plpgsql
as $$
	declare p_Exsist_Car int = count(*) from Car
	where State_Registration_Number = p_State_Registration_Number;
	begin
			if(p_Exsist_Pasport > 0) then
				raise notice 'такой номер автоиобиля уже есть';
			else
				update Car set
					Country = p_Country,
					Car_Body_ID = p_Car_Body_ID,
					Model_ID = p_Model_ID,
					Gearbox_ID = p_Gearbox_ID,
					Drive_ID = p_Drive_ID,
					Enjine_ID = p_Enjine_ID,
					Decommission_ID = p_Decommission_ID,
					State_Registration_Number = p_State_Registration_Number,
					The_Region = p_The_Region,
					Time_Of_Using = p_Time_Of_Using,
					Period_Of_Expoitation = p_Period_Of_Expoitation
					where
							ID_Car = p_ID_Car; 
			end if;
	end;
$$;
create or replace procedure Car_delete (p_ID_Car int)
language plpgsql
as $$
	declare p_any_child_record int := count(*) from Practice_Course
	where Car_ID = p_ID_Car;
	begin
		if (p_any_child_record > 0) then
			raise notice 'этот номер автомобиля не может быть удален, так как в таблице "практический курс", есть связанные данные!"';
		else
			delete from Car 
				where
					ID_Car = p_ID_Car;
		end if;
	end;
$$;
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

Create table Practice_Course_In_Groups
(
ID_Course_Groups SERIAL not null constraint PK_Course_Groups primary key,
Grouppa_ID int not null references Grouppa (ID_Grouppa),
Course_ID int not null references Practice_Course (ID_Practise_Course)
);
create or replace procedure Practice_Course_In_Groups_insert (p_Grouppa_ID int, p_Course_ID int)
language plpgsql
as $$
	begin
		insert into Practice_Course_In_Groups (Grouppa_ID, Course_ID) 
		values (p_Grouppa_ID, p_Course_ID); 
	end;
$$;
create or replace procedure Practice_Course_In_Groups_update (p_ID_Course_Groups int, p_Grouppa_ID int, p_Course_ID int)
language plpgsql
as $$
	begin
		update Practice_Course_In_Groups set
			Name_Model = p_Name_Model,
			Course_ID = p_Course_ID
			where
					ID_Course_Groups = p_ID_Course_Groups; 
		end;
$$;
create or replace procedure Practice_Course_In_Groups_delete (p_ID_Course_Groups int)
language plpgsql
as $$
	begin
			delete from Practice_Course_In_Groups 
				where
					ID_Course_Groups = p_ID_Course_Groups;
	end;
$$;
select * from Practice_Course

Create table Lessons_In_Groups
(
ID_Lessons_In_Groups SERIAL not null constraint PK_Lessons_In_Groups primary key,
Grouppa_ID int not null references Grouppa (ID_Grouppa),
Lesson_ID int not null references Lesson (ID_Lesson)
);
create or replace procedure Lessons_In_Groups_insert (p_Grouppa_ID int, p_Lesson_ID int)
language plpgsql
as $$
	begin
		insert into Lessons_In_Groups (Grouppa_ID, Lesson_ID) 
		values (p_Grouppa_ID, p_Lesson_ID); 
	end;
$$;
create or replace procedure Lessons_In_Groups_update (p_ID_Lessons_In_Groups int, p_Grouppa_ID int, p_Lesson_ID int)
language plpgsql
as $$
	begin
		update Lessons_In_Groups set
			Name_Model = p_Name_Model,
			Lesson_ID = p_Lesson_ID
			where
					ID_Lessons_In_Groups = p_ID_Lessons_In_Groups; 
		end;
$$;
create or replace procedure Lessons_In_Groups_delete (p_ID_Lessons_In_Groups int)
language plpgsql
as $$
	begin
			delete from Lessons_In_Groups
				where
					ID_ID_Lessons_In_Groups = p_ID_Lessons_In_Groups;
	end;
$$;
select * from Lessons_In_Groups

call lessons_In_Groups_insert(1,1)


SELECT count(*) FROM information_schema.routines 
WHERE routine_type = 'PROCEDURE';
