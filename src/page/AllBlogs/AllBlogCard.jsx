import React from 'react';
import { FaPenNib } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllBlogCard = ({ category }) => {
    // console.log(category)
    const {_id, title, date, category_name, country_name,  description, image} = category;


    const handleDetailBtn = _id => {
       console.log('hello')
    }


    return (
        <div className=''>
            <div className="card bg-base-100 shadow-xl border">
                <div className='flex items-center justify-between border-blue-700 p-2 m-4 mb-0 gap-8 border-b-2 border rounded'>
                    <div className="rounded">
                        <img className='w-10 rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=8" alt="" />
                    </div>
                    <div className="">
                        <h1 className='font-semibold'>Ayesh Piho Shen</h1>
                        <p className='text-gray-600'>{date}</p>
                    </div>
                    <div className='flex text-end items-end justify-end'>
                        <FaPenNib />
                    </div>

                </div>
                <div className="card-body py-6">
                    <h2 className="card-title">{category_name}</h2>
                    <h5 className="font-semibold">
                       {title}
                    </h5>
                    <p>{description}</p>

                    <div className="flex gap-2">
                        <button className='btn bg-blue-700 text-white hover:bg-black '>More Details</button>

                        {/* <Link to={`/wishlist/${_id}`}><button className="btn  btn-outline btn-primary hover:btn-black">wishlist</button></Link> */}

                        <button onClick={() => handleDetailBtn (_id)} className='btn  btn-outline btn-primary hover:btn-black '>wishlist</button>
                    </div>
                </div>
                <figure><img src={image} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default AllBlogCard;