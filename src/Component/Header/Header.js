import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h2>Select Quiz</h2>
            </div>
            <div className='link'>
                <Link to='/'>Home</Link>
                <Link to='/Quiz'>Quiz</Link>
                <Link to='/Blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;