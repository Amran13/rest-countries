import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Header = () => {
    const contextInfo = useContext(authContext)
    const {user, logOut} = contextInfo
    console.log(user)
    const handleLogOut = () => {
        logOut()
        .then(res => console.log('log out successfully'))
        .catch(err => console.error)
    }

    return (
        <div>
            <Link className='mx-2' to="/">Home</Link>
            {
                user && <Link className='mx-2' to="/countries">Countries</Link>
            }
            <Link className='mx-2' to="/login">Login</Link>
            <Link className='mx-2' to="/register">Register</Link>
            
            {
                user ? <div>
                    <Link className='mx-2' to="/dashboard">Dashboard</Link>
                <button onClick={handleLogOut}>LogOut</button>
                </div> : ''
            }
        </div>
    );
};

export default Header;