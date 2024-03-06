import React, { useState, useEffect } from 'react'; 
import { Link } from "react-router-dom"
import Header from '../components/header';
import Banner from '../components/banner';
import chatIcon from '../../back/designs/img/icon-chat.png';
import moneyIcon from '../../back/designs/img/icon-money.png';
import securityIcon from '../../back/designs/img/icon-security.png';
import Features from '../components/features';
import Footer from '../components/footer';
import '../scss/pages/_home.scss'
import '../scss/style.scss'

function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <div>
                <Features/> 
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
