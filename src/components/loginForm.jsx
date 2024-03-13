// LoginForm.jsx
import React from 'react';

function LoginForm({ handleSubmit, errorMessage, setCredentials, credentials }) {
    return (
        <form onSubmit={handleSubmit}>
            {errorMessage && <p className="error-login">{errorMessage}</p>}
            <div className="input-wrapper">
                <label htmlFor="username" className="input-wrapper-label">Username</label> 
                <input
                    type="text"
                    id="email"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password" className="input-wrapper-label">Password</label> 
                <input
                    type="password"
                    id="password"
                    name="password" 
                    autoComplete="current-password"
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button
                type="submit"
                className="sign-in-button"
            >
                Sign In
            </button>
        </form>
    );
}

export default LoginForm;