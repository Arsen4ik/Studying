export function AddTodo({ addTodoItem }) {
    function handler(e){
        if (e.key === 'Enter'){
            addTodoItem(e.target.value)
        }
    }

    return(
        <div className='input_elem'>
            <input type="text" placeholder="Новая задача" onKeyDown={handler} />
        </div>
    )
}