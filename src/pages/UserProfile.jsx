import React, { useState, useEffect } from 'react'; 
// import { Link } from "react-router-dom"
import Header from '../components/header.jsx';
// import UserHeader from '../components/userheader';
import Footer from '../components/footer';
import '../scss/pages/_userProfile.scss'
import '../scss/style.scss'

import { useDispatch, useSelector } from 'react-redux';
// import { selectToken } from '../Redux/selectors/authSelectors.jsx';
import { getUser } from '../Redux/actions/authActions'; // Import de l'action getUser


function UserProfile() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = useSelector(state => state.auth.user); // accéder à l'état user dans le store Redux
    
     // appel de l'action getUser dès que le composant est monté
        useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    // mettre à jour l'état local lorsque l'utilisateur est connecté
    useEffect(() => {
        if (user) {
            setIsLoggedIn(true);
        }
    }, [user]);

    useEffect(() => {
        if (token) {
            setIsLoggedIn(!!token);
        }
    }, [token, dispatch]);

    
    return (
        <div>
            <Header/>
            <main className="main bg-dark container">
            <h1 className="profileWelcome"> 
                {isLoggedIn && user 
                    ? <>Welcome back, <br/> {user.body.firstName} {user.body.lastName}!</>
                    : 'Welcome!'
                }
            </h1>
           {/* <UserHeader/> */}
                <button className="edit-button">Edit Name</button>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default UserProfile;