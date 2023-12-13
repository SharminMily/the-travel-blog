import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ category }) => {
    const { category_name, image } = category;


    return (
        <div className='max-w-[1200px] mx-auto' >
            <Link to={"/allBlogs"}>
                <div className="border-2 border-blue-400 p-4 rounded-xl">                   

                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className='rounded-xl' src={image} alt="Shoes" /></figure>
                    </div>

                    <div className='flex justify-center'>
                        <button className='btn mt-2 shadow-lg shadow-slate-600 bg-blue-600 normal-case hover:bg-blue-800 text-xl text-white'>{category_name}</button>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default Country;



