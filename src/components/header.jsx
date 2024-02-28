import * as React from 'react';
import Logo from '../components/logo';
import userIcon from '../../back/designs/img/user-icon.png';
// import '../scss/layout/_footer.scss';

function Header () {
    return <div className="header">
        <div className="nav-container">
            <nav className="main-nav">
            <Logo />
                <div className="login-button">
                    <img src={userIcon} alt="user icon" />
                    <p className="signin">Sign in </p>
                </div>
            </nav>
        </div>
    </div>
}

export default Header;