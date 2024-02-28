import * as React from 'react';
import Logo from '../components/logo';
// import '../scss/layout/_footer.scss';

function Header () {
    return <div className="header">
        <div className="nav-container">
            <nav className="main-nav">
            <Logo />
            </nav>
        </div>
    </div>
}

export default Header;