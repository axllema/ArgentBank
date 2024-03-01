import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/Error';
import UserProfile from './pages/UserProfile';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);
