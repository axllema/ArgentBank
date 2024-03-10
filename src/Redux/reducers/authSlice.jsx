import { createSlice } from "@reduxjs/toolkit"

// vérifie si un token d'authentification est déjà présent dans le localStorage
const checkToken = () => {
    console.log("checkToken authSlice : ", localStorage.getItem("authToken"))
    return localStorage.getItem("authToken") || null
    }

    // définition de l'état initial de l'authentification
    const initialState = {
    token: checkToken(), // initialise le token avec valeur checkToken()
    isAuthenticated: false, // initialise l'état par défaut (false : pas authentifié)
    }

    const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        // action pour gérer la connexion réussie de l'utilisateur
        login(state, action) {
            state.token = action.payload.token,
            console.log("authSlice state.token : ", state.token),
            state.isAuthenticated = true,
            localStorage.getItem("localStorage authToken", state.token)
            // localStorage.setItem("authToken", state.token) ?
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
        getUserSuccess(state, action) {
            state.user = action.payload,
            state.error = null
        },
        // gestion de l'échec de l'obtention de l'utilisateur
        getUserFailure(state, action) {
            state.error = action.payload
        },
    },
})

export const { login, logout, getUserSuccess, getUserFailure } = authSlice.actions
export default authSlice.reducer