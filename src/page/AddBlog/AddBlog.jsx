import React from 'react';
import { FaPenNib } from 'react-icons/fa';

const AddBlog = () => {
    return (
        <div className='m-20'>
            <div className="card w-96 bg-base-100 shadow-xl border">
                <div className='flex items-center justify-between border-blue-700 p-2 m-4 mb-0 gap-8 border-b-2 border rounded'>
                    <div className="rounded">
                        <img className='w-10 rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=8" alt="" />
                    </div>
                    <div className="">
                        <h1 className='font-semibold'>Ayesh Piho Shen</h1>
                    </div>
                    <div className='flex text-end items-end justify-end'>
                        <FaPenNib />
                    </div>

                </div>
                <div className="card-body">
                    <h2 className="card-title">America city</h2>
                    <h5 className="">
                        If a dog chews shoes whose shoes does he choose?
                    </h5>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                    <div className="flex gap-2">
                        <button className='btn bg-blue-700 text-white hover:bg-black '>More Details</button>
                        <button className='btn  btn-outline btn-primary hover:btn-black '>wishlist</button>
                    </div>
                </div>
                <figure><img src="https://i.ibb.co/zsqzzGt/francepic2.png" alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default AddBlog;