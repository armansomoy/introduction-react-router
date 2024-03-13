import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <div><h2>My Website</h2></div>
                <ul  className='navbar'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;