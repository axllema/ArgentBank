import React, { useState, useEffect } from 'react'; 
import Header from '../components/header';
// import Banner from '../components/banner';
import Footer from '../components/footer';
// import '../scss/style.scss'

function Home() {
    return (
        <div>
            <Header/>
            <h1>Bienvenue sur la page d'accueil!</h1>
            <p>Ceci est un exemple de texte ajouté à la page d'accueil.</p>
            <Footer/>
        </div>
    );
}

export default Home;