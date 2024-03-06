// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Importez votre reducer d'authentification
// Importez d'autres reducers si nécessaire

const rootReducer = combineReducers({
  auth: authReducer, // Reducer pour gérer l'authentification
  // Autres reducers...
});

export default rootReducer;
