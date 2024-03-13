import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import logo from '../../back/designs/img/argentBankLogo.png';
import userIcon from '../../back/designs/img/user-icon.png';
import signOutIcon from '../../back/designs/img/signout-icon.png';
import '../scss/layout/_header.scss';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/reducers/authSlice.jsx'
import { logout } from '../Redux/reducers/authSlice.jsx'

function Header() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const userProfile = useSelector((state) => state.auth.user);
    const user = useSelector((state) => state.auth.user); // accéder à l'état user dans le store Redux
    const [displayedName, setDisplayedName] = useState('');

    const userLogout = () => {
        dispatch(logout())
    }

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            dispatch(login({ token }));
        }
    }, [dispatch]);


    useEffect(() => {
        if (user?.body) {
            const name = user.body?.userName ?? `${user.body?.firstName} ${user.body?.lastName}`;
            setDisplayedName(name);
        } else if (user) {
            const name = user.userName ?? `${user.firstName} ${user.lastName}`;
            setDisplayedName(name);
        }
    }, [user]);

    return (
        <header>
            <nav className="main-nav">
                    <Link to="/" className="main-nav-logo"> 
                        <img alt="logo d'ArgentBank" src={logo} className="main-nav-logo-image"/>
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>


                    <div className="main-nav-links">
                        {isAuthenticated && userProfile ? (
                    <>
                        <Link to="/profile" className="link">
                            <img src={userIcon} alt="User Icon" className="main-nav-item-user_circle"/>
                            {displayedName}
                            </Link>

                        <Link to="/" onClick={userLogout} className="link">
                            <img src={signOutIcon} alt="Sign Out Icon" className="main-nav-item-user_circle" />Sign Out
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