// importation des dépendances nécessaires
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../components/header.jsx';
import userIcon from '../../back/designs/img/user-icon.png';
import Footer from '../components/footer.jsx';
import axios from 'axios';
import { login } from '../Redux/reducers/authSlice.jsx';

import '../scss/style.scss';
import '../scss/pages/_login.scss';

// définition du composant Login
function Login() {
    // utilisation du hook useNavigate pour la navigation entre les pages
    const navigate = useNavigate();
    // utilisation du hook useDispatch pour dispatcher des actions Redux
    const dispatch = useDispatch();

    // définition de l'état initial des identifiants avec le hook useState
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    // définition de l'état initial du message d'erreur avec le hook useState
    const [errorMessage, setErrorMessage] = useState('');

    // Définition de la fonction handleSubmit qui sera appelée lors de la soumission du formulaire
    const handleSubmit = async (event) => {
        // prévention du comportement par défaut du formulaire
        event.preventDefault();

        // vérification que l'email et le mot de passe sont bien renseignés
        if (!credentials.email || !credentials.password) {
            setErrorMessage('Email and password are required');
            return;
        }

        // tentative de connexion à l'API
        try {
            const response = await axios.post("http://localhost:3001/api/v1/user/login", credentials, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // si la réponse est OK, stockage du token dans le localStorage, dispatch de l'action login et redirection vers la page de profil
            if (response.status === 200) {
                const responseData = response.data;
                const token = responseData.body.token;
                localStorage.setItem("authToken", token);
                dispatch(login({ token }));
                navigate("/profile");
            } else {
                // si la réponse n'est pas OK, affichage du message d'erreur
                setErrorMessage(response.statusText);
            }
        } catch {
            // en cas d'erreur lors de la connexion à l'API, affichage d'un message d'erreur
            setErrorMessage("An error as occured.");
        }
    };

    return (
        <div>
            <Header/> // Affichage du composant Header
            <div className="test">
            <main className="main bg-dark">
            <section className="sign-in-content">
                <i><img src={userIcon} className="sign-in-icon" alt="sign in icon" /></i>
                <h1>Sign In</h1> // Titre de la page
                <form onSubmit={handleSubmit}>
                // Lorsque le formulaire est soumis, la fonction handleSubmit est appelée
                    {errorMessage && <p className="error-login">{errorMessage}</p>}
                    <div className="input-wrapper">
                    <label htmlFor="username" className="input-wrapper-label">Username</label> 
                    <input
                        type="text"
                        id="email"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} 
                        // lorsque la valeur du champ d'entrée change, l'état des identifiants est mis à jour
                    />
                    </div>
                    <div className="input-wrapper">
                    <label htmlFor="password" className="input-wrapper-label">Password</label> 
                    <input
                        type="password"
                        id="password"
                        name="password" 
                        autoComplete="current-password"
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        // lorsque la valeur du champ d'entrée change, l'état des identifiants est mis à jour
                    />
                    </div>
                    <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button
                        type="submit"
                        className="sign-in-button"
                    >
                        Sign In
                    </button>
                </form>
                </section>
            </main>
            <Footer />
            </div>
        </div>
    );
}

export default Login;