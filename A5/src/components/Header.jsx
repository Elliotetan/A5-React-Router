import './Header.css'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

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
                <button className="loginButton" onClick={() => Navigate('/login')}>Login</button>
                <button className="registerButton" onClick={() => Navigate('/register')}>Register</button>
            </div>
        </div>
    )
}

export default Header;