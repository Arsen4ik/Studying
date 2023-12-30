import './Header.scss'

// eslint-disable-next-line react/prop-types
export default function Header({ footerScroll }) {
    return (
        <header>
            <button onClick={footerScroll}>GO TO FOOTER</button>
        </header>
    )
}