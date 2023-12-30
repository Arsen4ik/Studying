import { useEffect, useState } from "react";

export function User() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('users') || localStorage.getItem('users') === '[]') {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => setUsers(data))
                .catch(err => {
                    console.warn(err);
                    alert('Ошибка при получении пользователей');
                });
        } else {
            const data = JSON.parse(localStorage.getItem('users'));
            setUsers(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [ users ]);

    function deleteUser(id) {
        const deletedUser = users.filter(user => user.id !== id);
        setUsers(deletedUser);
    }

    function deleteLastUser() {
        const deletedUser = users.slice(0, users.length - 1);
        setUsers(deletedUser);
    }

    return (
        <div>
            <h2>Users</h2>
            <button onClick={ () => deleteLastUser() }>Delete Last User</button>
            { users.map(elem => <p onClick={ () => deleteUser(elem.id) } key={ elem.id }>{ elem.name }</p>) }
        </div>
    )
}