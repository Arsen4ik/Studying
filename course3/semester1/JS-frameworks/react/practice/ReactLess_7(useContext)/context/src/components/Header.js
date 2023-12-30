import { useContext } from "react";
import { Context } from "../context/Context";

export function Header() {
    const { deleteFirstValue } = useContext(Context);

    return (
        <div>
            <h2>Header</h2>
            <button onClick={ () => deleteFirstValue() }>Delete First Number</button>
        </div>
    )
}