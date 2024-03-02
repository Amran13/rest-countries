import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='mx-2' to="/">Home</Link>
            <Link className='mx-2' to="/countries">Countries</Link>
            <Link className='mx-2' to="/login">Login</Link>
            <Link className='mx-2' to="/register">Register</Link>
            <Link className='mx-2' to="/dashboard">Dashboard</Link>
        </div>
    );
};

export default Header;