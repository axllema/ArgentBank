// Importation des dépendances nécessaires
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../back/designs/img/argentBankLogo.webp';
import userIcon from '../../back/designs/img/user-icon.webp';
import signOutIcon from '../../back/designs/img/signout-icon.webp';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Redux/reducers/authSlice.jsx';
import '../scss/layout/_header.scss';

// Définition du composant Header
function Header() {
    // Utilisation des hooks Redux pour accéder au dispatch et à l'état du store
    // récupérer la fonction dispatch du store Redux - utilisée pour envoyer des actions à votre store Redux.
    const dispatch = useDispatch();
    // utilise le hook useSelector de Redux pour accéder à l'état isAuthenticated - indique si l'utilisateur est authentifié ou non
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    // utilise le hook useSelector de Redux pour accéder à l'état user - représente les informations de l'utilisateur actuellement connecté.
    const user = useSelector((state) => state.auth.user);
    // utilise le hook useState pour définir l'état displayedName
    const [displayedName, setDisplayedName] = useState('');

    // Fonction pour déconnecter l'utilisateur
    const userLogout = () => {
        dispatch(logout())
    }

    // Utilisation du hook useEffect pour vérifier si un token est stocké localement et, si c'est le cas, pour se connecter
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            dispatch(login({ token }));
        }
    }, [dispatch]);

    // Utilisation du hook useEffect pour définir le nom à afficher pour l'utilisateur
        // met à jour l'état displayedName avec le nom de l'utilisateur chaque fois que l'objet user change.
        // si l'utilisateur a un userName, il utilise cela. Sinon, il utilise le firstName et le lastName de l'utilisateur.
    useEffect(() => {
        if (user?.body) {
            const name = user.body?.userName ?? `${user.body?.firstName} ${user.body?.lastName}`;
            setDisplayedName(name);
        } else if (user) {
            const name = user.userName ?? `${user.firstName} ${user.lastName}`;
            setDisplayedName(name);
        }
    }, [user]);

    // Rendu du composant
    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo"> 
                    <img alt="logo d'ArgentBank" src={logo} className="main-nav-logo-image" width="200px" height="auto"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>

                <div className="main-nav-links">
                    {isAuthenticated && user ? (
                        <>
                            <Link to="/profile" className="link">
                                <img src={userIcon} alt="User Icon" className="main-nav-item-user_circle" width="30px" height="auto"/>
                                {displayedName}
                            </Link>

                            <Link to="/" onClick={userLogout} className="link">
                                <img src={signOutIcon} alt="Sign Out Icon" className="main-nav-item-user_circle" width="30px" height="auto"/>
                                Sign Out
                            </Link>
                        </>
                    ) : (
                        <Link to="/login" className="link">Sign In</Link>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;