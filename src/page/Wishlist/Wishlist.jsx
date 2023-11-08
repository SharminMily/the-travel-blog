import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Wishlist = () => {

    const blogs = useLoaderData()
    console.log(blogs)
    return (
        <div>
            Wishlist  
        </div>
    );
};

export default Wishlist;