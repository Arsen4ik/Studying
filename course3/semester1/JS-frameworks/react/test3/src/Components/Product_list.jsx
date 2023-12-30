import { useContext } from "react"
import { Context } from "../Context/Context"
import Product_item from "./Product_item"
import './Product_list.scss'

export default function Product_list() {
    const { data } = useContext(Context)
    return (
        <main>
            {
                data.map(el => <Product_item key={el.id} info={el} />)
            }
        </main>
    )
}