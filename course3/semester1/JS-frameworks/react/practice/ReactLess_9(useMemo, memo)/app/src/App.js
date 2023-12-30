import { useState } from "react";
import Counter from "./components/Counter";
import Burden from "./components/Burden";

export function App() {
    const [ count1, setCount1 ] = useState(0);
    const [ count2, setCount2 ] = useState(0);

    // useMemo
    // 1 проблема. При изменении count1 происходит вызов функции burdenHandler().
    // см компонент Burden

    // React.memo
    // 2 проблема. При изменении count2 обновляется компонент count2 и так же компонент Burden

    return (
        <div>
            <div>
                <h2>Counter 1</h2>
                <Counter value={ count1 } elem={ 'count1' }/>
                <button onClick={ () => setCount1(count1 + 1) }>Plus 1</button>
            </div>
            <div>
                <h2>Counter 2</h2>
                <Counter value={ count2 } elem={ 'count2' }/>
                <button onClick={ () => setCount2(count2 + 1) }>Plus 1</button>
            </div>
            <Burden value={ count2 }/>
        </div>
    )
}