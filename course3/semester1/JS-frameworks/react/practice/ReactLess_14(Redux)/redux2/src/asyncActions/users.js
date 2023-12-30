import { getEmployeeAction } from "../store/employeeReducer"
import { getUserListAction } from "../store/usersReducer"

export function fetchUserList() {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => dispatch(getUserListAction(data)))
    }
}

export function fetchUser(id) {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(res => res.json())
            .then(data => dispatch(getEmployeeAction(data)))
    }
}