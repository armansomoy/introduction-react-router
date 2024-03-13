import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <div><h2>My Website</h2></div>
                <ul  className='navbar'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    {/* <li><Link to="/users">Users</Link></li> */}
                    {/* <li><Link to="/posts">Posts</Link></li> */}
                    <li><NavLink to="/posts">Posts</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;