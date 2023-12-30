import s from './Input.module.scss';

export function Input({ size, ...otherProps }) {
  return (
    <input 
      { ...otherProps }
      className={`${s.inp_elem} ${s[size]}`}
    />
  )
}