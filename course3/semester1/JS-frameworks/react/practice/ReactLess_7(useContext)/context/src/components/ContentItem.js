import { useContext } from "react";
import { Context } from "../context/Context";

export function ContentItem() {
    const { numbers } = useContext(Context)

    return (
        <ul>
            <h2>ContentItem</h2>
            { numbers.map(elem => <li key={ elem }>{ elem }</li>) }
        </ul>
    )
}