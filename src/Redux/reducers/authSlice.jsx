import { createSlice } from "@reduxjs/toolkit"

// vérifie si un token d'authentification est déjà présent dans le localStorage
const checkToken = () => {
    return localStorage.getItem("authToken") || null
    }

    // définition de l'état initial de l'authentification
    const initialState = {
        token: null,
        isAuthenticated: false,
        user: null,
        error: null,
    };

    const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        // action pour gérer la connexion réussie de l'utilisateur
        login(state, action) {
            state.token = action.payload.token,
            state.isAuthenticated = true,
            localStorage.setItem("authToken", state.token)
        },

        // action pour gérer l'échec de la connexion
        loginFailure(state, action) {
            state.token = null, // réinitialise le token
            state.error = action.payload.message, // met à jour l'erreur avec le message d'erreur reçu
            state.isAuthenticated = false, // met à jour l'état d'authentification
            localStorage.removeItem("authToken") // supprime le token du localStorage
        },

        // action pour gérer la déconnexion de l'utilisateur
        logout(state) {
            state.token = null, // réinitialise le token
            state.isAuthenticated = false,
            localStorage.removeItem("authToken")
        },

        // gestion de la réussite de l'obtention de l'utilisateur
        getUser(state, action) {
        state.user = {
            ...state.user,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            userName: action.payload.userName,
            email: action.payload.email,
        };
        state.error = null;
        },
        getUserSuccess(state, action) {
            state.user = action.payload;
            state.error = null;
        },
        getUserFailure(state, action) {
            state.error = action.payload;
        },
        updateUserSuccess(state, action) {
            state.user = action.payload;
            state.error = null;
        },
        updateUserFailure(state, action) {
            state.error = action.payload;
        },
},
})

export const { login, logout, getUser, getUserSuccess, getUserFailure, updateUserSuccess, updateUserFailure } = authSlice.actions;
export default authSlice.reducer