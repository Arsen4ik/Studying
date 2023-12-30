import './style.global.css';
import { TodoList } from "./components/TodoList";
import { useEffect, useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { Context } from "./context/Context";

export function App() {
    const data = [
        { id: 1, title: 'Позавтракать', completed: true },
        { id: 2, title: 'Почистить огурцы', completed: false },
        { id: 3, title: 'Помыть кота', completed: true },
    ]

    const [ todos, setTodos ] = useState(data);

    function removeTodoItem(id) {
        const removedTasks = todos.filter(elem => elem.id !== id);

        setTodos(removedTasks)
    }

    function changeTodoItem(id) {
        const changedItem = todos.map(elem => {
            if (elem.id === id) {
                elem.completed = !elem.completed
            }
            return elem
        });

        setTodos(changedItem)
    }

    function addTodoItem(title) {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false
        }

        setTodos([ newTodo, ...todos ])
    }

    useEffect(() => {
        const local_data = localStorage.getItem('todos-list');
        if (local_data) {
            setTodos(JSON.parse(local_data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos-list', JSON.stringify(todos));
    }, [ todos ]);

    return (
        <Context.Provider value={ { removeTodoItem, changeTodoItem } }>
            <div>
                <AddTodo addTodoItem={ addTodoItem }/>
                <TodoList todos={ todos } />
            </div>
        </Context.Provider>
    )
}