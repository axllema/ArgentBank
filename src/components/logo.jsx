import { Link } from "react-router-dom"
import * as React from 'react';
import logo from '../../back/designs/img/argentBankLogo.png';


function Logo () {
    return <div className="main-nav-logo">
            <Link to="/">
                <img alt="logo d'ArgentBank" src={logo} className="main-nav-logo-image"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
    </div>
}

export default Logo;