import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice.jsx";
// Importez d'autres reducers si nécessaire

// // configurez le store Redux en utilisant configureStore
const store = configureStore({
    reducer: {
    auth: authReducer,
       // ajouter d'autres réducteurs ici
    },
});

export default store;

// Ce fichier est utilisé pour créer le store Redux. Le store est l'objet qui rassemble les différentes
// parties de l'architecture Redux. 
    // Il contient l'état de l'application
    // permet de dispatcher des actions et spécifie comment l'état de l'application est mis à jour avec les réducteurs.
