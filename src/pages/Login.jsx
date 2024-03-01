import * as React from 'react';
import { Link } from "react-router-dom"
import Header from '../components/header';
import Footer from '../components/footer';
import userIcon from '../../back/designs/img/user-icon.png';
import '../scss/style.scss';
import '../scss/pages/_login.scss';

function Login() {
    return (
        <div>
            <Header/>
            <div className="test">
            <main className="main bg-dark">
                <section className="sign-in-content">
                <i><img src={userIcon} className="sign-in-icon" alt="sign in icon" /></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                    <label htmlFor="username" className="input-wrapper-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        autoComplete="username"
                    />
                    </div>
                    <div className="input-wrapper">
                    <label htmlFor="password" className="input-wrapper-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    </div>
                    <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button
                    type="button"
                    className="sign-in-button"
                    >
                    Sign In
                    </button>
                </form>
                </section>
            </main>
            <Footer />
            </div>
        </div>
        );
    }
    
export default Login;