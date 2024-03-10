import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import logo from '../../back/designs/img/argentBankLogo.png';
import userIcon from '../../back/designs/img/user-icon.png';
import signOutIcon from '../../back/designs/img/signout-icon.png';
import '../scss/layout/_header.scss';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/reducers/authSlice.jsx'
import { logout } from '../Redux/reducers/authSlice.jsx'

function Header() {
    const user = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.user);

    const userLogout = () => {
        dispatch(logout())
    }

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            dispatch(login({ token }));
        }
    }, [dispatch]);

    return (
        <header>
            <nav className="main-nav">
            <Link to="/" className="main-nav-logo"> 
                <img alt="logo d'ArgentBank" src={logo} className="main-nav-logo-image"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>


            <nav>
            {user ? (
        <>
            <Link to="/User" className="link">
                <img src={userIcon} alt="User Icon" className="main-nav-item-user_circle"/>
                {userProfile && (userProfile.userName ? userProfile.userName : userProfile.firstName)}
            </Link>
            <Link to="/" onClick={userLogout} className="link">
                <img src={signOutIcon} alt="Sign Out Icon" className="main-nav-item-user_circle" />Sign Out
            </Link>
        </>
    ) : (
        <Link to="/login" className="link">Sign In</Link>
    )}
            </nav>
            </nav>
        </header>
    );
}

export default Header;