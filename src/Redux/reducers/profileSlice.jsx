import { createSlice } from "@reduxjs/toolkit"

// création de la slice 'user'
const profileSlice = createSlice({
    name: "user", // nom de la slice

    // état initial de la slice avec les champs de l'utilisateur
    initialState: {
        firstName: "", // prénom de l'utilisateur
        lastName: "", // nom de l'utilisateur
        userName: "", // nom d'utilisateur
        email: "", // email de l'utilisateur
    },

    // définition des actions et des reducers
    reducers: {
        // action pour mettre à jour les valeurs dans les champs du profil de l'utilisateur
        setProfile: (state, action) => {
            state.firstName = action.payload.body.firstName // met à jour le prénom de l'utilisateur
            state.lastName = action.payload.body.lastName // met à jour le nom de l'utilisateur
            state.userName = action.payload.body.userName // met à jour le nom d'utilisateur
            state.email = action.payload.body.email // met à jour l'email de l'utilisateur
        },
        // action pour mettre à jour la valeur du champ 'userName'
        updateUserName: (state, action) => {
            state.userName = action.payload // met à jour le nom d'utilisateur
        },
    },
})

// exportation des actions pour être utilisées dans les composants
export const { setProfile, updateUserName } = profileSlice.actions

// exportation du reducer pour être utilisé dans le store Redux
export default profileSlice.reducer

// utilisé pour gérer l'état du profil de l'utilisateur dans l'application.
    // définit l'état initial, les actions et les reducers pour cette partie de l'état.