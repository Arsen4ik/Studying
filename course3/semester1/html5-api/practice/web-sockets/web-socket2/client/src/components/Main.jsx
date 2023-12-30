import { Link } from "react-router-dom";
import { useState } from "react";
import style from "../styles/Main.module.css";

const FIELDS = {
    NAME: "name",
    ROOM: "room",
};

const Main = () => {
    const { NAME, ROOM } = FIELDS;
    const [values, setValue] = useState({ [NAME]: "", ROOM: "" });

    const handleChange = ({ target: { value, name } }) => {
        setValue({ ...values, [name]: value });
    };

    const handleClick = (e) => {
        const isDisabled = Object.values(values).some((value) => !value);
        if (isDisabled) e.preventDefault();
    };

    return (
        <div className={style.wrap}>
            <div className={style.container}>
                <h1 className={style.heading}>Присоединится</h1>

                <form className={style.form}>
                    <div className={style.group}>
                        <input
                            type="text"
                            name="name"
                            value={values[NAME]}
                            className={style.input}
                            placeholder="Введите UserName"
                            onChange={handleChange}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className={style.group}>
                        <input
                            type="text"
                            name="room"
                            value={values[ROOM]}
                            className={style.input}
                            placeholder="Введите название комнаты"
                            onChange={handleChange}
                            autoComplete="off"
                            required
                        />
                    </div>

                    <Link
                        className={style.group}
                        onClick={handleClick}
                        to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}
                    >
                        <button className="style.button" type="submit">
                            Войти
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Main;