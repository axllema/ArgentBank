import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
//  d'autres reducers si nécessaire

// Combinez vos réducteurs ici
const rootReducer = combineReducers({
    auth: authReducer,
  // autres réducteurs
});

const store = configureStore({
    reducer: rootReducer,
  // Middleware supplémentaire si nécessaire
});

export default store;