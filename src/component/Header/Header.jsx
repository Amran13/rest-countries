import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <NavLink to="/" className={({ isActive }) => isActive ? "bg-cyan-400 mx-2 p-4 rounded-md" : "mx-2 text-black p-4 rounded-md"}>
                Home
            </NavLink>
            <NavLink to="/countries" className={({ isActive }) => isActive ? "bg-cyan-400 mx-2 p-4 rounded-md" : "mx-2 p-4 rounded-md text-black"}>
                Countries
            </NavLink>
        </div>
    );
};

export default Header;