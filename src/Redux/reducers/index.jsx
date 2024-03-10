import { combineReducers } from "redux";
import authReducer from './authSlice.jsx';
import profileReducer from './profileSlice.jsx'; 

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    // ajouter d'autres réducteurs ici
});

export default rootReducer;

// ce fichier est utilisé pour combiner tous vos réducteurs individuels en un seul réducteur racine.
    // Chaque réducteur gère une partie spécifique de l'état de l'application, et combineReducers
    // permet de les combiner en un seul objet qui peut être passé à createStore.