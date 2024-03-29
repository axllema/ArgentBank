import React, { useState, useEffect } from 'react'; 
import Header from '../components/header.jsx';
import UserHeader from '../components/userheader';
import AccountSection from '../components/accountsection';  
import Footer from '../components/footer';
import '../scss/style.scss'

 // déclaration des états locaux
function UserProfile() {
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