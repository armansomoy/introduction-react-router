import React from 'react';

const Header = () => {
    return (
        <div>
            <h2>Header</h2>
            <nav>
                <ul style={{listStyle: 'none'}}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;