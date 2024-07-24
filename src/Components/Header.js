import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';

const Header = () => {
    return (
        <div className="header-ctr">
            <div className="header-left-ctr">
                <Link to="/" className="logo">
                    <img src="images/logo.png" alt="Logo" />
                </Link>
            </div>
            <HeaderMenu />
        </div>
    );
}

export default Header;
