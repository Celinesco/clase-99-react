import "../styles/Nav.scss"


const Nav = () => {
    return (
        <nav className="nav-bar">
            <ul className="left-side-navbar">
                <li><i className="fas fa-bars"></i></li>
                <li>HOME</li>
                <li>SHOP</li>
                <li>MAGAZINE</li>
            </ul>
            <ul className="right-side-navbar">
                <li><i className="fas fa-shopping-cart"></i></li>
                <li>LOGIN</li>
            </ul>
        </nav>
    )
}

export default Nav;