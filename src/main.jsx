import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import './scss/style.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);
