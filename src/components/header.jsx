import * as React from 'react';
import { Link } from "react-router-dom"
import logo from '../../back/designs/img/argentBankLogo.png';
import userIcon from '../../back/designs/img/user-icon.png';
import '../scss/layout/_header.scss';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/reducers/authSlice.jsx'

function Header() {
    // créer une instance de dispatch
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector(state => state.auth);
    // isAuthenticated sera true si un token est présent dans l'état
    // et false sinon, et user sera l'objet utilisateur stocké dans l'état.

    const handleLogout = () => {
        dispatch(logout());
        // dispatche l'action logout lorsque handleLogout est appelée
    };

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo"> 
                <img alt="logo d'ArgentBank" src={logo} className="main-nav-logo-image"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>


            {isAuthenticated && user ? (
            <Link to="/logout" className="main-nav-item" onClick={handleLogout}> 
                <i><img src={userIcon} className="main-nav-item-user_circle" alt="sign out" /></i>
                {user.name} (Sign out)
            </Link>
        ) : (
            <Link to="/login" className="main-nav-item"> 
                <i><img src={userIcon} className="main-nav-item-user_circle" alt="sign in" /></i>
                Sign in
            </Link>
        )}
        </nav>
    );
}

export default Header;
