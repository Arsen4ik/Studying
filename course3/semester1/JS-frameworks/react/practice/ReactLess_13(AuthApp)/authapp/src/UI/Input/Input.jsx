import { forwardRef } from 'react';
import s from './Input.module.css';

export const Input = forwardRef((props, ref) => {
  return (
    <input ref={ref} {...props} className={s.inp_elem} />
  )
});