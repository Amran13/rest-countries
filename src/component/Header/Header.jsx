import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Header = () => {
    const contextInfo = useContext(authContext)
    const { user, logOut } = contextInfo
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(res => console.log('log out successfully'))
            .catch(err => console.error)
    }

    return (
        <div className='flex justify-center flex-col lg:flex-row mt-6'>
            <NavLink className='mx-2' to="/">Home</NavLink>
            {
                user && <NavLink className='mx-2' to="/countries">Countries</NavLink>
            }


            <div>
                {
                    user ? <div className='flex flex-col lg:flex-row'>
                        <NavLink className='mx-2' to="/dashboard">Dashboard</NavLink>
                        <p className='mx-8'> {user.email} </p>
                        <button onClick={handleLogOut}>LogOut</button>
                    </div> : <div>
                        <NavLink className='mx-2' to="/login">Login</NavLink>
                        <NavLink className='mx-2' to="/register">Register</NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;