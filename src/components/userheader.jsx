import React, { useState, useEffect } from 'react';
import '../scss/pages/_userProfile.scss'
import '../scss/style.scss'

import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/actions/authActions.jsx'; // Import de l'action getUser
import EditUsernameForm from '../components/editUsernameForm.jsx'; // Import du composant EditUsernameForm


const UserHeader = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = useSelector(state => state.auth.user); // accéder à l'état user dans le store Redux
    const [isOpen, setIsOpen] = useState(false) // form fermé par défaut
    const [editedUserName, setEditedUserName] = useState(user?.userName) // définit état username
    const [message, setMessage] = useState(''); // nouvel état pour le message de succès
    
    useEffect(() => {
        if (user) {
            console.log(user, "user header");
        }
    }, [user]);
    
     // appel de l'action getUser dès que le composant est monté
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    // mettre à jour l'état local lorsque l'utilisateur est connecté
    useEffect(() => {
        if (user && user.body) {
            setIsLoggedIn(true);
            setEditedUserName(user.body.userName); // màj username pour userProfile
        }
    }, [user]);

    useEffect(() => {
        if (!isOpen && user && user.body) {
            setEditedUserName(user.body.userName);
        }
    }, [isOpen]);

    const saveChange = (event) => {
        event.preventDefault()
        // Mise à jour du nom d'utilisateur
        dispatch(updateUser({ userName: editedUserName }))
        // Fermeture du formulaire
        setIsOpen(false)
    }

    return (
        <div className="header">
            <h1 className="profileWelcome"> 
                {
                isLoggedIn && user 
                    ? <>Welcome back, <br/> 
                        {
                        user.body.userName 
                            ? user.body.userName 
                            : `${user.body.firstName} ${user.body.lastName}`
                        }!
                    </>
                    : 'Welcome!'
            }
            </h1>
            {message && <p>{message}</p>}
            {!isOpen ? (
                //* Mode édition désactivé
                <button className="edit-button"
                    onClick={() => {
                        setIsOpen(true)
                    }}
                >
                Edit Name
            </button>
            ) : (
                //* Mode édition activé
                <div className="modal">
                    <EditUsernameForm
                        userProfile={user} 
                        setEditedUserName={setEditedUserName} 
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