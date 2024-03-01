import React, { useState, useEffect } from 'react'; 
import { Link } from "react-router-dom"
import Header from '../components/header';
import Footer from '../components/footer';
import '../scss/pages/_userProfile.scss'
import '../scss/style.scss'

function UserProfile() {
    return (
        <div>
        Welcome back
        Tony Jarvis!
    </div>
    );
}


export default UserProfile;