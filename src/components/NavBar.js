import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link className="link" to="/" exact>Home Page</Link>
            <Link className="link" to="/viewmorephotos" >View More Photos By Date</Link>
        </div>
    );
}

export default NavBar;