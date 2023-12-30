import { useDispatch, useSelector } from "react-redux"
import { decrAction, incrAction, resetAction } from "../store/countReducer";

export function Counter() {
  const count = useSelector(store => store.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <div>
        <button onClick={() => dispatch(resetAction())}>Reset</button>

        <button onClick={() => dispatch(incrAction(1))}>Incr</button>
        <button onClick={() => dispatch(decrAction(1))}>Decr</button>

        <button onClick={() => dispatch(incrAction(100))}>Incr100</button>
        <button onClick={() => dispatch(decrAction(100))}>Decr00</button>

        <button onClick={() => dispatch(incrAction(+prompt('введите новое значение')))}>Incr some</button>
        <button onClick={() => dispatch(decrAction(prompt('введите новое значение')))}>Decr some</button>
      </div>
    </div >
  )
}