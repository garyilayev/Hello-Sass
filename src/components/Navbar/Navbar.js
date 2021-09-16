import './Navbar.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/">
                <h3 className="title">Hello Sass!</h3>
            </Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navbar;