import * as React from 'react';
import Logo from '../components/logo';
import userIcon from '../../back/designs/img/user-icon.png';
import '../scss/layout/_header.scss';

function Header() {
    return (
        <nav className="main-nav">
        <a className="main-nav-logo" href="/">
            <Logo/>
            <h1 className="sr-only">Argent Bank</h1>
        </a>

        <button className="main-nav-item" onClick={() => window.location.href ="/"}>
            <i><img src={userIcon} className="main-nav-item-user_circle" alt="sign in" /></i>
            Sign in
        </button>
        </nav>
    );
}

export default Header;
