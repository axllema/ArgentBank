import axios from "axios";
import { loginUser } from '../../../back/server/controllers/userController'; // Importez votre fonction d'appel API pour la connexion

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:3001/user/login', credentials);
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
    }
};