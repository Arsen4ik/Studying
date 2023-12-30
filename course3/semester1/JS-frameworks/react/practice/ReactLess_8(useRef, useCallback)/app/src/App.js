import './App.scss';
// В компоненте Example находится лекция по useRef и useCallback
import { Example } from "./components/Example";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { useRef } from "react";

export function App() {
    const scrollRef = useRef();

    function autoScroll() {
        scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div>
            {/*<Example />*/ }
            <Header autoScroll={ autoScroll }/>
            <Main ref={ scrollRef }/>
        </div>
    )
}