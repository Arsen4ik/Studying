import { useState, useEffect } from "react";
import io from "socket.io-client";
import style from "../styles/Chat.module.css";

const Chat = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = io.connect("http://localhost:7878/");

    return () => socket.disconnect();
  }, []);

  const handleChange = ({ target: { value } }) => setMessage(value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.wrap}>
      <div className={style.header}>
        <div className={style.title}>Комната: </div>
        <div className={style.users}>Кол-во пользователей в чате: </div>
        <button className={style.left}>Выйти из чата</button>
      </div>

      <div className={style.messages}>
        <span>тест</span>
      </div>

      <form className={style.form}>
        <div className={style.input}>
          <input
            type="text"
            name="message"
            value={message}
            onChange={handleChange}
            placeholder="Введите сообщение..."
            autoComplete="off"
            required
          />
        </div>

        <div className={style.emoji}>
          <img src="" alt="" />
        </div>
        <div className={style.button}>
          <input
            onSubmit={handleSubmit}
            type="submit"
            value="Отправить сообщение"
          />
        </div>
      </form>
    </div>
  );
};

export default Chat;
