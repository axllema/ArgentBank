import React, { useState, useEffect } from 'react';
import '../scss/pages/_userProfile.scss'
import '../scss/style.scss'

import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../Redux/actions/authActions.jsx'; // Import des actions getUser et updateUser

function EditUsernameForm({ userProfile, setEditedUserName, saveChange, setIsOpen, setMessage }) {
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = useSelector(state => state.auth.user); // accéder à l'état user dans le store Redux
    const [isOpen, setIsOpenLocal] = useState(false) // form fermé par défaut
    const [editedUserName, setEditedUserNameLocal] = useState(user?.userName) // définit état username
    
    // appel de l'action getUser dès que le composant est monté
        useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    // mettre à jour l'état local lorsque l'utilisateur est connecté
    useEffect(() => {
        if (user) {
            setIsLoggedIn(true);
        }
    }, [user]);

    // effet pour mettre à jour editedUserName chaque fois que user change
    useEffect(() => {
    setEditedUserNameLocal(user?.userName);
    }, [user]);

    const saveChangeLocal = (event) => {
        event.preventDefault()
        // Mise à jour du nom d'utilisateur
        dispatch(updateUser({ userName: editedUserName }))
        // Fermeture du formulaire
        setIsOpen(false)
        // Affichage du message de succès
        setMessage('Pseudo changé avec succès !');
    }

    return (
        <form onSubmit={saveChangeLocal} className="edit_form">
            <div className="input-wrapper">
                <label htmlFor="username" className="input-wrapper-label">User name:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="username"
                    defaultValue={userProfile?.userName}
                    onChange={(e) => setEditedUserNameLocal(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="firstName" className="input-wrapper-label">First name:</label> 
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    autoComplete="firstName"
                    placeholder={user.body.firstName}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="lastName" className="input-wrapper-label">Last name:</label> 
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    autoComplete="lastName"
                    placeholder={user.body.lastName}
                />
            </div>

            <div className='buttons'>
                <button
                    type="submit"
                    className="edit-button"
                >
                    Save
                </button>

                <button 
                    type= "button"
                    className="cancel-button"
                    onClick={() => {
                        setIsOpen(false)    
                    }}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default EditUsernameForm;