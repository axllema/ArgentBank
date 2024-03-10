import axios from 'axios';
import { login as loginSuccess, logout as logoutSuccess } from '../reducers/authSlice.jsx';

const responseData = response.data;

export const getUser = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('jwtToken'); // récupérer le token du localStorage

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        // effectuer une requête GET vers l'API de profil utilisateur
        const response = await axios.get('http://localhost:3001/api/v1/user/profile', config);

        const user = response.data.user; // extraire les informations de l'utilisateur de la réponse

        // si la requête réussit, envoyez une action pour mettre à jour l'état avec les données du profil utilisateur
        dispatch({ type: 'GET_USER_SUCCESS', payload: user });
        } catch (error) {
        // si la requête échoue, envoyez une action pour gérer l'erreur
        dispatch({ type: 'GET_USER_FAILURE', payload: error.message });
        }
        };

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:3001/api/v1/user/login", credentials, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            const token = responseData.body.token;
            localStorage.setItem("authToken", token);
            dispatch(loginSuccess());
        } else {
            dispatch({ type: 'LOGIN_FAILURE', payload: { message: response.statusText, user: null } });
        }
    } catch {
        dispatch({ type: 'LOGIN_FAILURE', payload: { message: "An error as occured.", user: null } });
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        localStorage.removeItem("jwtToken");
        dispatch(logoutSuccess());
    } catch (err) {
        alert("problème lors de la déconnexion");
    }
};