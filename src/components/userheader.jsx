// Importation des dépendances nécessaires
import React, { useState, useEffect } from 'react';
import '../scss/components/_userheader.scss';
import '../scss/style.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/actions/authActions.jsx'; // Import de l'action getUser
import { updateUser } from '../Redux/actions/authActions.jsx'; // Import de l'action updateUser
import EditUsernameForm from '../components/editUsernameForm.jsx'; // Import du composant EditUsernameForm

// Définition du composant UserHeader
const UserHeader = () => {
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = useSelector((state) => state.auth.user); // accéder à l'état user dans le store Redux
    const [isOpen, setIsOpen] = useState(false); // form fermé par défaut
    const [username, setUsername] = useState(user?.userName); // définit état username
    const [displayedName, setDisplayedName] = useState('');
    const [message, setMessage] = useState(''); // nouvel état pour le message de succès

    // Mettre à jour le nom affiché lorsque l'utilisateur change
    useEffect(() => {
        if (user?.body) {
            const name = user.body?.userName ?? `${user.body?.firstName} ${user.body?.lastName}`;
            setDisplayedName(name);
        } else if (user) {
            const name = user.userName ?? `${user.firstName} ${user.lastName}`;
            setDisplayedName(name);
        }
    }, [user, displayedName]);

    // Appel de l'action getUser dès que le composant est monté
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    // Mettre à jour l'état local lorsque l'utilisateur est connecté
    useEffect(() => {
        if (user?.body) {
            setIsLoggedIn(true);
            setUsername(user.body.userName); // màj username pour userProfile
        }
    }, [user]);

    // Mettre à jour le nom d'utilisateur lorsque la fenêtre d'édition est fermée
    useEffect(() => {
        if (!isOpen && user?.body) {
            setUsername(user.body.userName);
        }
    }, [isOpen, user]);

    // Fonction pour sauvegarder les modifications
    const saveChange = (event) => {
        event.preventDefault();
        // Mise à jour du nom d'utilisateur
        dispatch(updateUser({ userName: username })); // updateUser n'est pas importé, cela causera une erreur
        // Fermeture du formulaire
        setIsOpen(false);
    };

    // Rendu du composant
    return (
        <div className="header">
            <h1 className="profileWelcome">
                {isLoggedIn && user ? (
                    <>
                        Welcome back, <br />
                        {displayedName}!
                    </>
                ) : (
                    'Welcome!'
                )}
            </h1>
            {message && <p>{message}</p>}
            {!isOpen ? (
                <button
                    className="edit-button"
                    onClick={() => {
                        setIsOpen(true);
                    }}>
                    Edit Name
                </button>
            ) : (
                <div className="modal">
                    <EditUsernameForm
                        userProfile={user}
                        setEditedUserName={setUsername}
                        saveChange={saveChange}
                        setIsOpen={setIsOpen} // Passer setIsOpen en tant que prop
                        setMessage={setMessage} // Passer setMessage en tant que prop
                    />
                </div>
            )}
        </div>
    );
};

export default UserHeader;

// Ce fichier définit un composant React appelé UserHeader qui affiche un en-tête pour l'utilisateur.
    // L'en-tête contient un message de bienvenue, un bouton pour éditer le nom de l'utilisateur et un formulaire pour éditer le nom de l'utilisateur.
    // L'état isOpen contrôle si le formulaire est affiché ou non.
    // L'état username est utilisé pour stocker le nom de l'utilisateur et est mis à jour lorsque le formulaire est soumis.
    // L'état message est utilisé pour afficher un message de succès après la soumission du formulaire.