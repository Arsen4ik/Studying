import { useDispatch, useSelector } from "react-redux";
import { initCapAction, initCapWordAction, lowerAction, newWordAction, upperAction } from "../store/stringReducer";

const String = () => {
    const string = useSelector(store => store.string)
    const dispatch = useDispatch()
    return (
        <>
            <h1>String Redux</h1>
            <h2>{string}</h2>
            <div>
                <button onClick={() => dispatch(upperAction())}>to Upper</button>
                <button onClick={() => dispatch(lowerAction())}>to Lower</button>

                <button onClick={() => dispatch(initCapAction())}>First UP, other down</button>

                <button onClick={() => dispatch(initCapWordAction())}>First UP, other down EACH word</button>
                <button onClick={() => dispatch(newWordAction(prompt('new word')))}>new word</button>
            </div>
        </>
    );
}

export default String;