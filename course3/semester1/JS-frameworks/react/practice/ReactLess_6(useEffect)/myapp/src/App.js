import { Example } from "./components/Example";
import { User } from "./components/User";
import { Todos } from "./components/Todos";
// useEffect - это функция, которая следит за каждым этапом жизненного цикла компонента и 
// выполняет побочный код
// пример смотреть в компоненте Example


export function App() {
    return (
        <div>
            {/*<Example/>*/ }
            <User />
            {/*<Todos />*/}
        </div>
    );
}
