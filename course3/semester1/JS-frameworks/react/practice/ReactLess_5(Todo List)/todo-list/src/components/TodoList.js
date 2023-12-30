import { TodoItem } from "./TodoItem";

export function TodoList({ todos }) {
    return(
        <div>
            { todos.map(elem => <TodoItem
                key={elem.id}
                id={elem.id}
                title={elem.title}
                completed={elem.completed}
            />) }
        </div>
    )
}