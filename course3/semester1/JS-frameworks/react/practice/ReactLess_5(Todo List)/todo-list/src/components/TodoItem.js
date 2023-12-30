import { useContext } from "react";
import { Context } from "../context/Context";

export function TodoItem({ id, title, completed }) {
    const { removeTodoItem, changeTodoItem } = useContext(Context);

    return(
        <div
            className='todo_item'
            onDoubleClick={() => removeTodoItem(id)}
            onClick={() => changeTodoItem(id)}
            style={{
                backgroundColor: completed ? 'green' : 'red'
            }}
        >
            <h1>{title}</h1>
        </div>
    )
}