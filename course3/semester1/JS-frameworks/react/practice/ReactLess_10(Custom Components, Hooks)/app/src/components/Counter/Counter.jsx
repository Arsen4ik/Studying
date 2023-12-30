import { Button } from "../ui/Button/Button";
import { useStorageState } from "../../customHooks/useStorageState";

export function Counter() {
  let data = ['Alex', 'Steve', 'Nina', 'George'];

  const [count, setCount] = useStorageState(0, 'count');
  const [empl, setEmpl] = useStorageState(data, 'empl');

  return (
    <div>
      <div>
        <h2>{count}</h2>
        <Button
          title={'Increment'}
          theme={'green'}
          onClick={() => setCount(count + 1)}
        />
      </div>
      <div>
        <ul>
          {empl.map(el => <li>{el}</li>)}
        </ul>
        <Button
          title={'Delete Empl'}
          theme={'black'}
          onClick={() => setEmpl(empl.slice(1))}
        />
      </div>
    </div>
  )
}