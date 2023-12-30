import { useEffect, useState } from "react";

export function Todos() {
    const [ todos, setTodos ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(err => {
                console.warn(err);
                alert('Ошибка при получении пользователей');
            });
    }, []);

    return (
        <div>
            <h2>Задачи</h2>
            <h3>Количество задач: {todos.length}</h3>
            <button onClick={() => setTodos(todos.slice(1))}>Click</button>
            <ul>
                { todos.map(todo => <li key={ todo.id }>{ todo.title }</li>) }
            </ul>
        </div>
    )
}