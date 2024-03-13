import React, { useState, useEffect } from 'react'; 
// import { Link } from "react-router-dom"
import Header from '../components/header.jsx';
import UserHeader from '../components/userheader';
import AccountSection from '../components/accountsection'; 
// import EditUsername from '../components/editUsername.jsx'; 
import Footer from '../components/footer';
import '../scss/pages/_userProfile.scss'
import '../scss/style.scss'

 // déclaration des états locaux
function UserProfile() {

    const user = useSelector(state => state.auth.user);

    return (
        <div>
            <Header/>
            <main className="main bg-dark container">
            <UserHeader />
            <AccountSection />
            </main>
            <Footer/>
        </div>
    );
}

export default UserProfile;
