import { Routes, Route, Link } from 'react-router-dom';
import { ReactComponent as XMarkIcon } from '../../icons/xmark-solid.svg';
import s from './Modal.module.css';
import { FormElem } from './FormElem/FormElem';

export function Modal({ active, setActive }) {
  return (
    <div className={`${s.modal} ${active && s.active}`}>
      <div className={`${s.modal_content} ${active && s.active}`}>
        <XMarkIcon onClick={() => setActive(false)} className={s.xmark_icon}/>
        <Routes>
          <Route path='/login' element={
            <FormElem
              title='Авторизация'
              button={{ submit: 'Авторизация', redirect: 'Регистрация' }}
              link={'/registration'}
              type={'login'}
              input={{ email: 'Почта', password: 'Пароль' }}
              infoText={"Введите логин и пароль вашего аккаунта"}
            />}
          />
          <Route path='/registration' element={
            <FormElem
              title='Регистрация'
              button={{ submit: 'Регистрация', redirect: 'Авторизация' }}
              link={'/login'}
              type={'reg'}
              input={{ email: 'Почта', password: 'Пароль', secondPassword: 'Повторите пароль' }}
              infoText={'Регистрируясь на сайте, Вы соглашаетесь с нашими правилами и политикой конфиденциальности.'}
            />}
          />
          <Route path='/reset' element={
            <FormElem
              title='Сброс пароля'
              button={{ submit: 'Сброс пароля', redirect: 'Авторизация' }}
              link={'/login'}
              type={'reset'}
              input={{ email: 'Почта' }}
              infoText={'Укажите почту зарегистрированного аккаунта. Ссылка на смену пароля будет действовать 24 часа.'}
            />}
          />
        </Routes>
      </div>
    </div>
  )
}