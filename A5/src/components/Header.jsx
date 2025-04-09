import './Header.css'

function Header() {

    return (
        <div className="top">
            <div className="logo">
                <h2 className="title">10//10 Films</h2>
            </div>
            <div className="menu">
                <ul className="options">
                    <li>Movies </li>
                    <li>TV Series </li>
                    <li>Most Popular</li>
                </ul>
            </div>
            <div className="login">
                <button className="loginButton">Login</button>
                <button className="registerButton">Register</button>
            </div>
        </div>
    )
}

export default Header;