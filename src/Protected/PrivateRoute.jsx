import React, { useContext } from 'react';
import { authContext } from '../component/Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    console.log(children);
    const contextInfo = useContext(authContext)
    const {user} = contextInfo
    return (
        <div>
            {
                user ? children : <Navigate to="/login"></Navigate>
            }
        </div>
    );
};

export default PrivateRoute;