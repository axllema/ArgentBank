import axios from "axios";

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:3001/api-docs/#/User%20Module/post_user_login', credentials);
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
    }
};