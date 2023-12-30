import './App.css'
import { useForm } from 'react-hook-form'

export function App() {

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  let inputName = {
    ...register('firstname', {
      required: 'Имя обязательно к заполнению',
      minLength: {
        value: 3,
        message: 'Имя должно состоять из не менее 3 букв'
      },
      maxLength: {
        value: 10,
        message: 'Имя не должно превышать больше 10 символов'
      }
    })
  }

  let inputLastname = {
    ...register('lastname', {
      required: 'Фамилия обязательна к заполнению',
      pattern: {
        value: /[A-Za-zА-Яа-яЁё]+$/,
        message: 'Фамилия должна быть только из букв'
      } 
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Имя
            <input className={(errors.firstname ? 'error' : '')} {...inputName} />
          </label>
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>
        <div>
          <label>
            Фамилия
            <input {...inputLastname} />
          </label>
          {errors.lastname && <p>{errors.lastname.message}</p>}
        </div>
        <div>
          <input type='submit' />
        </div>
      </form>
    </div>
  );
}