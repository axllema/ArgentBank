import React from 'react';
import { createRoot } from 'react-dom/client'; // Importez createRoot depuis react-dom/client
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; // Importez votre store Redux
import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/Error';
import UserProfile from './pages/UserProfile';

const root = createRoot(document.getElementById('root')); // Créez la racine

root.render(
    <React.StrictMode>
        <Provider store={store}>
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Error />} />
            <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </Router>
        </Provider>
    </React.StrictMode>
);