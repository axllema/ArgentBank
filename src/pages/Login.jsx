import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../components/header.jsx';
import LoginForm from '../components/loginForm.jsx';
import userIcon from '../../back/designs/img/user-icon.webp';
import Footer from '../components/footer.jsx';
import axios from 'axios'; // importation d'axios pour faire des requêtes HTTP
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
            setErrorMessage("Email and/or password are wrong. Try again.");
        }
    };

    // Rendu du composant
    return (
        <div>
            <Header/>
            <div className="test">
            <main className="main bg-dark">
            <section className="sign-in-content">
                <i><img src={userIcon} className="sign-in-icon" alt="sign in icon" width="30" height="auto"/></i>
                <h1>Sign In</h1>
                <LoginForm 
                    handleSubmit={handleSubmit} 
                    errorMessage={errorMessage} 
                    setCredentials={setCredentials} 
                    credentials={credentials} 
                />
                </section>
            </main>
            <Footer />
            </div>
        </div>
    );
}

export default Login;

// définit un composant Login qui gère le processus de connexion d'un utilisateur.
 // Il utilise plusieurs hooks de React et Redux, ainsi que des composants personnalisés pour le rendu.
 // Lorsque l'utilisateur soumet le formulaire de connexion, le composant tente de se connecter à l'API et gère les erreurs éventuelles.