import React, { useState, useEffect } from 'react';
import '../scss/style.scss'
import Field from '../components/field.jsx';
import Button from '../components/button.jsx';


import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../Redux/actions/authActions.jsx'; // Import des actions getUser et updateUser

function EditUsernameForm({ userProfile, setEditedUserName, saveChange, setIsOpen, setMessage }) {
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = useSelector(state => state.auth.user); // accéder à l'état user dans le store Redux
    const [isOpen, setIsOpenLocal] = useState(false) // form fermé par défaut
    const [editedUserName, setEditedUserNameLocal] = useState(''); // Initialisez avec une chaîne vide

    // appel de l'action getUser dès que le composant est monté
        useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    // mettre à jour l'état local lorsque l'utilisateur est connecté
    useEffect(() => {
        if (user) {
            setIsLoggedIn(true);
            setEditedUserNameLocal(user.userName || '');
        }
    }, [user]);

    setTimeout(() => {
        setMessage('');
    }, 3500)

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
        <Field 
            className="input-wrapper-label"
            label="User name:"
            type="text"
            content="username"
            value={editedUserName}
            onChange={(e) => setEditedUserNameLocal(e.target.value)}
        />
        <Field 
            className="input-wrapper-label"
            label="First name:"
            type="text"
            content="firstName"
            placeholder={user.body ? user.body.firstName : ''}
        />
        <Field 
            className="input-wrapper-label"
            label="Last name:"
            type="text"
            content="lastName"
            placeholder={user.body ? user.body.lastName : ''}
        />
            <div className='buttons'>
                <Button
                        className="edit-button"
                        type="submit"
                        content="Save"
                        onClick={saveChangeLocal}
                    />
                <Button 
                    className="cancel-button"
                    type= "button"
                    content="Cancel"
                    onClick={() => setIsOpen(false)}
                />
            </div>
        </form>
    );
}

export default EditUsernameForm;