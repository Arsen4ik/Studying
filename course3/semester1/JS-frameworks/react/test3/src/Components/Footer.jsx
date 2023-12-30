import { useContext } from 'react'
import './Footer.scss'
import { Context } from '../Context/Context'

// eslint-disable-next-line react/prop-types
export default function Footer() {

    const { footerRef } = useContext(Context)

    return (
        <footer ref={footerRef}>
            <h1>FOOTER</h1>
        </footer>
    )
}