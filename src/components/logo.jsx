import { Link } from "react-router-dom"
import * as React from 'react';
import logo from '../../back/designs/img/argentBankLogo.png';


function Logo () {
    return <div className="logo">
            <Link to="/">
                <img alt="logo d'ArgentBank" src={logo} />
            </Link>
    </div>
}

export default Logo;