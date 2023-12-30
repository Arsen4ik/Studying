import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../asyncActions/users";

const Employee = () => {
    const employee = useSelector(store => store.employee)
    const dispatch = useDispatch()
    // console.log(employee);

    return (
        <>
            <h1>Employee</h1>
            <div>
                <button onClick={() => {
                    const id = prompt('gg')
                    dispatch(fetchUser(id))
                }}>give a value with ID - async</button>
            </div>
            <h3>{employee.name}</h3>
            <p>{employee.phone}</p>
            <p>{employee.email}</p>
            <p>{employee.company?.name}</p>
        </>
    );
}

export default Employee;