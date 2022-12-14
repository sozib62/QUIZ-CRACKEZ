import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <nav className='header'>
            <div>
                <h2>Select Your Quiz</h2>
            </div>
            <div className='link'>
                <Link to='/'>Home</Link>
                <Link to='/Statistics'>Statistics</Link>
                <Link to='/Blog'>Blog</Link>
            </div>
        </nav >
    );
};

export default Header;