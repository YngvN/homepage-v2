import React from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.scss';

const Nav: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/music">Music</Link>
                </li>
                <li>
                    <Link to="/programming">Programming</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
