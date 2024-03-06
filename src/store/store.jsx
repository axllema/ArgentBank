import { configureStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
// s'assurer  du bon chemin d'accès à votre reducer

const rootReducer = combineReducers({
    auth: authReducer,
  //ajout d'autres reducers si nécessaire
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;