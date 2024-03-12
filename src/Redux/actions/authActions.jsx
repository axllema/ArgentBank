import axios from 'axios';
import  { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { login as loginSuccess, logout as logoutSuccess, getUserSuccess, getUserFailure } from '../reducers/authSlice.jsx';

export const getUser = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("authToken"); // récupérer le token du localStorage

        const config = {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        // effectuer une requête POST vers l'API de profil utilisateur
        const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, config);
        // la méthode POST prend trois arguments :
        // l'URL à laquelle faire la requête, les données à envoyer avec la requête ("corps" de la requête),
        // et la configuration de la requête.
            //  = pas de données à envoyer avec la requête, donc vous passez un objet vide {} comme deuxième argument.
            // Enfin, vous passez config comme troisième argument pour configurer la requête.
        
        const user = response.data.body; // extraire les informations de l'utilisateur de la réponse

      // si la requête réussit, dispatcher une action avec les informations de l'utilisateur
    dispatch(getUserSuccess(response.data));
    } catch (error) {
        // si la requête échoue, dispatcher une action pour gérer l'erreur
        dispatch(getUserFailure(error.message));
    }
};

//
export const updateUser = (user) => async (dispatch) => {
    try {
        const token = localStorage.getItem("authToken");

        const config = {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.put('http://localhost:3001/api/v1/user/profile', user, config);

        dispatch(updateUserSuccess(response.data.user));
    } catch (error) {
        dispatch(updateUserFailure(error.message));
    }
};
//

export const updateUserSuccess = (user) => ({
    type: 'auth/updateUserSuccess',
    payload: user,
});

export const updateUserFailure = (error) => ({
    type: 'auth/updateUserFailure',
    payload: error,
});

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:3001/api/v1/user/login", credentials, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            const token = response.data.token;

            // stocker le token dans le localStorage
            localStorage.setItem("authToken", token);

            // dispatcher le token à votre store Redux
            dispatch(loginSuccess(token));
        }
    } catch (error) {
        // Gérer les erreurs
        dispatch(logoutSuccess(error.message));
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        localStorage.removeItem("authToken");
        dispatch(logoutSuccess());
    } catch (err) {
        alert("problème lors de la déconnexion");
    }
};