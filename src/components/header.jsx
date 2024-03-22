import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../back/designs/img/argentBankLogo.webp';
import userIcon from '../../back/designs/img/user-icon.webp';
import signOutIcon from '../../back/designs/img/signout-icon.webp';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Redux/reducers/authSlice.jsx';
import '../scss/layout/_header.scss';

function Header() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const token = localStorage.getItem("authToken");

    useEffect(() => {
        if (token) {
            dispatch(login({ token }));
        }
    }, [dispatch, token]);

    const userLogout = () => {
        dispatch(logout());
        localStorage.removeItem("authToken");
    }

    let displayedName = '';

    if (isAuthenticated && user) {
        if (user.body) {
            displayedName = user.body?.userName ?? `${user.body?.firstName} ${user.body?.lastName}`;
        } else {
            displayedName = user.userName ?? `${user.firstName} ${user.lastName}`;
        }
    }

    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo"> 
                    <img alt="logo d'ArgentBank" src={logo} className="main-nav-logo-image" width="200px" height="auto"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>

                <div className="main-nav-links">
                    {isAuthenticated ? (
                        <>
                            <Link to="/profile" className="link">
                                <img src={userIcon} alt="User Icon" className="main-nav-item-user_circle" width="30px" height="auto"/>
                                {displayedName}
                            </Link>

                            <Link to="/" onClick={userLogout} className="link">
                                <img src={signOutIcon} alt="Sign Out Icon" className="main-nav-item-user_circle" width="30px" height="auto"/>
                                Sign Out
                            </Link>
                        </>
                    ) : (
                        <Link to="/login" className="link">Sign In</Link>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;