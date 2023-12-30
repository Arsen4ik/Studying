import { useContext } from 'react'
import './Product_item.scss'
import { Context } from '../Context/Context'
import Stars from './Stars'

/* eslint-disable react/prop-types */
export default function Product_item({ info }) {
    const { deleteData } = useContext(Context)
    const rate = Math.round(info.rating)
    // console.log(rate);
    // const stars = new Array(5).fill().map((_, ind) => ind+1 <= rate ? true : false)
    const stars = new Array(5).fill().fill(true, 0, rate)
    return (
        <div className='pr-item' onDoubleClick={() => deleteData(info.id)}>
            <img src={info.thumbnail} alt="" />
            <h1>{info.title}</h1>
            <p>price: <span>{info.price}$</span></p>
            <Stars stars={stars} />
        </div>
    )
}