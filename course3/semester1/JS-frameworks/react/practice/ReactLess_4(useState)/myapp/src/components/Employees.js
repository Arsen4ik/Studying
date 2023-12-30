import { useState } from "react";

function Employees(){
    let data = [
        {id: 1, name:  'Alex', salary: 1000},
        {id: 2, name:  'Steven', salary: 400},
        {id: 3, name:  'John', salary: 9000},
        {id: 4, name:  'Neena', salary: 2000},
        {id: 5, name:  'Lorem', salary: 700},
    ];

    const [employees, setEmployees] = useState(data);

    function deleteLastEmployee(){
        // Решение 1
        // const copyEmployee = [...employees]
        // copyEmployee.pop()
        // setEmployees(copyEmployee)

        // Решение 2
        setEmployees(employees.slice(0, -1))

        // Решение 3
        // setEmployees(employees.filter((_, ind) => ind !== employees.length - 1))
    }

    const deleteFirstEmployee = () => setEmployees(employees.slice(1));

    function addNewEmployee(){
        let [name, salary] = prompt().split(' ');
        let newEmployee = {
            id: Date.now(),
            name,
            salary: +salary
        }

        setEmployees([...employees, newEmployee])
    }
    function changeSalary(id){
        const changedEmployees = employees.map(elem => {
            if (elem.id === id) {
                elem.salary = 0
            }

            return elem
        });

        setEmployees(changedEmployees)
    }
    function sortEmp(){
        const copyEmp = [...employees];
        copyEmp.sort((a, b) => a.salary - b.salary);

        setEmployees(copyEmp);
    }


    return(
        <div>
            <h1>Сотрудники</h1>
            <div>
                <button onClick={() => deleteFirstEmployee()}>Удалить первого сотрудника</button>
                <button onClick={() => deleteLastEmployee()}>Удалить последнего сотрудника</button>
                <button onClick={() => addNewEmployee()}>Добавить нового сотрудника</button>
                <button onClick={() => sortEmp()}>Сортировать сотрудников</button>
            </div>
            <div>
                { employees.map((e) =>
                    <div key={e.id} onClick={() => changeSalary(e.id)}>
                        <h3>{ e.name }</h3>
                        <p>{ e.salary }</p>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Employees;