import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from "./UI/Button/Button";
import { Modal } from "./components/Modal/Modal";

export function App() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Link to={'/login'}>
        <Button
          title='Авторизация / Регистрация'
          color='yellow'
          onClick={() => setActive(true)}
        />
      </Link>
      <Modal active={active} setActive={setActive} />
    </div>
  );
}
