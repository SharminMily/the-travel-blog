import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="text-center my-20 ">
            <h1 className="text-blue-600 text-6xl font-bold pb-4">404</h1>
            <h1 className=" text-4xl font-bold ">Oops... </h1>
            <p className='mb-4 text-xl'>Something went wrong..!</p>
            <Link to="/">
                <button className="p-4 btn-outline bg-blue-600 rounded-lg text-white text-xl">Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;