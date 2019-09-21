import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {

    return (
        <nav>
            <h4>Logo</h4>
            <ul className="nav-links">
                <Link className="link-style" to="/gallery">
                    <li>Gallery</li>
                </Link>
                <Link className="link-style" to="/users">
                    <li>Users</li>
                </Link>
                <Link className="link-style" to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;