import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="header">
            <div className="logo"></div>
            <div className="menu_wrapper">
                {/* Если Header вынести за пределы роутера, то Link работать не будет */}
                <Link to={'/'}>
                    <p>Home</p>
                </Link>
                <Link to={'/about'}>
                    <p>About</p>
                </Link>
                <Link to={'/contacts'}>
                    <p>Contacts</p>
                </Link>
            </div>
        </div>
    )
}