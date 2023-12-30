import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Context } from "./context/Context";

export function App() {
    const [ numbers, setNumbers ] = useState([ 1, 2, 3, 4, 5, 6, 7, 8 ]);

    function deleteFirstValue() {
        setNumbers(numbers.slice(1));
    }

    return (
        <Context.Provider value={ { numbers, deleteFirstValue } }>
            <div>
                <h2>App</h2>
                <Header/>
                <Main/>
            </div>
        </Context.Provider>
    )
}