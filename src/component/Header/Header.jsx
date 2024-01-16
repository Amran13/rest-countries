import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='mx-2' to="/">Home</Link>
            <Link className='mx-2' to="/countries">Countries</Link>
        </div>
    );
};

export default Header;