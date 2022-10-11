import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/Quiz'>Quiz</Link>
            <Link to='/Blog'>Blog</Link>
        </nav>
    );
};

export default Header;