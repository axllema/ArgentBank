import React, { useState, useEffect } from 'react'; 
import Header from '../components/header';
import Banner from '../components/banner';
import Features from '../components/features';
import Footer from '../components/footer';
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
