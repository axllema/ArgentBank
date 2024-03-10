import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/Error';
import UserProfile from './pages/UserProfile';
import { Provider } from "react-redux";
import store from "./Redux/store.jsx";
import { login } from '../src/Redux/reducers/authSlice.jsx';

// composant principal de l'application
function Main() {
    // utilisation du hook useSelector pour accéder à l'état du token dans le store Redux
    const token = useSelector((state) => state.auth.token);
    // utilisation du hook useDispatch pour créer une fonction dispatch que nous pouvons utiliser pour dispatcher des actions
    const dispatch = useDispatch();
    // création d'un état local pour suivre si le chargement du token est terminé
    const [loading, setLoading] = useState(true);

    // utilisation du hook useEffect pour récupérer le token du localStorage et le dispatcher à l'action login lorsque le composant est monté
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            dispatch(login({ token }));
        }
        // mise à jour de l'état loading à false une fois que le chargement du token est terminé
        setLoading(false);
    }, [dispatch]);

    // Rendu du composant
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
                {/* utilisation de l'état loading et du token pour déterminer si l'utilisateur doit être redirigé vers la page de profil ou la page de connexion */}
                <Route path="/profile" element={!loading && (token ? <UserProfile /> : <Navigate to="/login" />)} />
            </Routes>
        </Router>
    );
}

// rendu de l'application dans l'élément root du DOM
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* utilisation du Provider pour rendre le store Redux disponible pour tous les composants de l'application */}
        <Provider store={store}>
            <Main />
        </Provider>
    </React.StrictMode>,
);


// Ce fichier est le point d'entrée de votre application React.
    // Il définit les routes de votre application, gère l'authentification de l'utilisateur et rend l'application dans l'élément root du DOM. 

// Il récupère le token d'authentification de l'utilisateur du localStorage lors du chargement de l'application.
    // Si un token est présent, il est dispatché à l'action login pour mettre à jour l'état d'authentification dans le store Redux.

// Il définit les routes del'application.
    // Chaque Route correspond à un chemin d'URL et spécifie le composant à rendre lorsque ce chemin est visité.
    // Pour la route /profile, il vérifie si le token d'authentification est présent et si le chargement du token est terminé.
        // Si le token est présent et que le chargement est terminé, il rend le composant UserProfile. Sinon, il redirige l'utilisateur vers la page de connexion.

// Il rend l'application dans l'élément root du DOM et utilise le Provider pour rendre le store Redux disponible pour tous les composants de l'application.