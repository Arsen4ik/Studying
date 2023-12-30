import { memo, useMemo } from "react";

let render = 0;

function Burden({ value }) {

    // useMemo() позволяет указать зависимости, по которым будет определяться вызов указанной функции в случае обновления компонента.
    // Хук позволяет по условию определить, нужно ли выолнять тело функции (возвращать новый return) или нет
    // Сама функция внутри обвертки далее перестанет быть функцией

    // useCallback позволяет не переопределять функцию в момент обновления компонента!
    // useMemo в отличии от useCallback, возвращает НЕ функцию
    // Наличие ключевого слова return внутри колбека useMemo ОБЯЗАТЕЛЬНОЕ!!!


    console.log(`Компонент Burden был обновлен ${ ++render } раз`);

    const burdenHandler = useMemo(() => {
        let i = 0;
        while (i < 1_000_000_000) {
            i++
        }

        return (value > 5 ? `Значение больше 5` : `Значение меньше 5`)
    }, [ value ]);

    return (
        <div>
            <h2>{ burdenHandler }</h2>
        </div>
    )
}

export default memo(Burden, (prevProps, nextProps) => {
    return nextProps.value !== 6;
});