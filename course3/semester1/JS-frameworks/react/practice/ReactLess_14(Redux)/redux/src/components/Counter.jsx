import { useDispatch, useSelector } from "react-redux"

export function Counter(){
  const count = useSelector(store => store);
  const dispatch = useDispatch();

  return(
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <div>
        <button onClick={() => dispatch({ type: 'INCR' })}>Incr</button>
        <button onClick={() => dispatch({ type: 'DECR' })}>Decr</button>
        <button onClick={() => dispatch({ type: 'NULL' })}>Null</button>
      </div>
    </div>
  )
}