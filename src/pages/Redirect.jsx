import React from 'react';
import { Navigate } from 'react-router-dom';

const Redirect = () => {
    return (
        <div>
            <Navigate to='/category/01'></Navigate>
        </div>
    );
};

export default Redirect;