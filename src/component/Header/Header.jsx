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
            <Link className='mx-2' to="/">Home</Link>
            {
                user && <Link className='mx-2' to="/countries">Countries</Link>
            }


            <div>
                {
                    user ? <div className='flex flex-col lg:flex-row'>
                        <Link className='mx-2' to="/dashboard">Dashboard</Link>
                        <p className='mx-8'> {user.email} </p>
                        <button onClick={handleLogOut}>LogOut</button>
                    </div> : <div>
                        <Link className='mx-2' to="/login">Login</Link>
                        <Link className='mx-2' to="/register">Register</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;