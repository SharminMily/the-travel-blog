import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading } = useAuth()
    if(loading) {
        return <div className="text-center py-8"><span className="loading loading-spinner loading-lg "></span></div>
    }
    

    if(!user?.email){
        return<Navigate to="/login"></Navigate>
    }


    return children;
};

export default PrivateRouter;