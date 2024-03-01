import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { configureStore, combineReducers } from 'redux';
// import authReducer from '../reducers/authReducer';
// importer d'autres reducers si nécessaire

// combiner les reducers si vous avez plusieurs
const rootReducer = combineReducers({
    auth: authReducer,
  // autres reducers...
});

// créer le store Redux en utilisant le rootReducer
const store = configureStore(rootReducer);

// exporter le store
export default store;
