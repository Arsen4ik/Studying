import s from './Button.module.scss';

export function Button({ title, theme, ...otherProps }) {
    console.log(otherProps)

    return (
        <button
            {...otherProps}
            className={`${s.btn_elem} ${s[theme]}`}
        >
            {title}
        </button>
    )
}