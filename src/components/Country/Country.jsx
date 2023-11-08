import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ category }) => {
    const { category_name, image } = category;


    return (
        <div className='max-w-[1200px] mx-auto'>
            <Link to={"/addBlog"}>
                <div className="card w-42 h-32 bg-base-100 shadow-xl image-full my-8">
                    <figure><img className='w-full h-40' src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p className=' text-white text-xl font-semibold text-center'>{category_name}</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Country;



