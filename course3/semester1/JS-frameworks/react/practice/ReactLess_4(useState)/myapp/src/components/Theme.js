import { useState } from "react";

function Theme(){
    // Задание: реализовать процесс, который при нажатии на кнопку, будет менять цвет с красного
    // на синий (в том числе и на стороне разметки). При повторном нажатии цвет необходимо вернуть
    // и так циклично

    const [theme, setTheme] = useState('green');
    const [isVisible, setVisible] = useState(true);

    const handleClick = () => setVisible(!isVisible);

    function changeTheme() {
        if (theme === 'green'){
            setTheme('red')
        } else setTheme('green')
    }

    return(
        <div style={{ backgroundColor: theme }}>
            <h1>Смена темы</h1>
           <button onClick={() => changeTheme()}>Поменять тему</button>
            <button onClick={handleClick}>Спрятать/Показать список!</button>
            { isVisible && <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
            </ul> }
        </div>
    )
}

export default Theme;