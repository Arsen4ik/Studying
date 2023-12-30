import { useEffect, useState } from "react";

function Number() {

    // useState - это функция, которая позволяет заставить компонент обновится
    // Результатом работы функии являются два выражения:

    // 1) state - фактические значение состояния, которое можно читать/отобрадать на стороне разметки
    // 2) setState - это функция, которая фаткически позволяет компоненту обновится в момент вызова
    // Примечание: чтобы указать новое значение стейта - необходимо вызвать сетСтейт и указать новое значение в качестве аргумента
    // Еше: сам стейт (без функции сетСтей) менять категорически запрещено

    // const [state, setState] = useState(defaultState)

    const [ count, setCount ] = useState(0);

    useEffect(() => {
        const data = +localStorage.getItem('counter');
        setCount(data);
    }, []);

    useEffect(() => {
        localStorage.setItem('counter', count);
    }, [ count ]);

    function addHandler() {
        const answer = prompt();

        if (!isNaN(answer)) {
            setCount(count + +answer)
        } else alert('Указанное значение не число')
    }

    function removeHandler() {
        const answer = prompt();

        if (!isNaN(answer)) {
            setCount(count - answer)
        } else alert('Указанное значение не число')
    }

    return (
        <div>
            <h1>Счетчик</h1>
            <h2 style={ { color: (count % 2 == 0) ? 'red' : 'green' } }>{ count }</h2>
            <button onClick={ () => setCount(count + 1) }>Инкремент!</button>
            <button onClick={ () => setCount(count - 1) }>Декремент!</button>
            <button onClick={ () => setCount(count + 100) }>Инкремент + 100!</button>
            <button onClick={ () => setCount(count - 100) }>Декремент - 100!</button>
            <button onClick={ addHandler }>Модальное окно</button>
            <button onClick={ removeHandler }>Модальное окно</button>
        </div>
    );
}

export default Number;