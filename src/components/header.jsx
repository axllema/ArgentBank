import * as React from 'react';
import { Link } from "react-router-dom"
import logo from '../../back/designs/img/argentBankLogo.png';
import userIcon from '../../back/designs/img/user-icon.png';
import '../scss/layout/_header.scss';

function Header() {
    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo"> 
                <img alt="logo d'ArgentBank" src={logo} className="main-nav-logo-image"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            <Link to="/login" className="main-nav-item"> 
                <i><img src={userIcon} className="main-nav-item-user_circle" alt="sign in" /></i>
                Sign in
            </Link>
        </nav>
    );
}

export default Header;
