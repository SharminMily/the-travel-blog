import React from 'react';
import { FaPenNib } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllBlogCard = ({ category }) => {
    // console.log(category)
    const { _id, title, long_description,  date, category_name, country_name, description, image } = category;


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
                        <button onClick={() => document.getElementById(_id).showModal()} className='btn bg-blue-700 text-white hover:bg-black '>More Details</button>

                        {/* <Link to={`/wishlist/${_id}`}><button className="btn  btn-outline btn-primary hover:btn-black">wishlist</button></Link> */}

                        <button onClick={() => handleDetailBtn(_id)} className='btn  btn-outline btn-primary hover:btn-black '>wishlist</button>
                    </div>
                </div>
                <figure><img src={image} alt="Shoes" /></figure>
            </div>

            {
                <dialog id={_id} class="modal modal-bottom sm:modal-middle">
                    <form method="dialog" class="modal-box ">

                        <div class="card bg-base-100 rounded-lg">
                            <figure class="px-10 pt-10">
                                <img src={image} alt="Shoes" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <div className='flex justify-between gap-2'>
                                    <button className="btn btn-outline btn-primary font-semibold 
                                     text-xl normal-case">{category_name}</button>
                                    <button className='btn btn-outline btn-primary font-semibold text-xl'>{date}</button>
                                </div>
                                <h2 class="card-title font-bold text-2xl text-blue-600">{title}</h2>
                                <p>{description}</p>
                                <p>{long_description}</p>
                                <div class="card-actions">
                                    <div class="rating w-24 rating-lg rating-half">
                                        <input type="radio" name="rating-10" class="rating-hidden" />
                                        <input type="radio" name="rating-10" class="bg-[#F85559] mask mask-star-2 mask-half-1" />
                                        <input type="radio" name="rating-10" class="bg-[#F85559] mask mask-star-2 mask-half-2" />
                                        <input type="radio" name="rating-10" class="bg-[#F85559] mask mask-star-2 mask-half-1" checked />
                                        <input type="radio" name="rating-10" class="bg-[#F85559] mask mask-star-2 mask-half-2" />
                                        <input type="radio" name="rating-10" class="bg-[#F85559] mask mask-star-2 mask-half-1" />
                                        <input type="radio" name="rating-10" class="bg-[#F85559] mask mask-star-2 mask-half-2" />
                                        <input type="radio" name="rating-10" class="bg-[#F85559] mask mask-star-2 mask-half-1" />
                                        <input type="radio" name="rating-10" class="bg-[#F85559] mask mask-star-2 mask-half-2" />
                                        <input type="radio" name="rating-10" class="bg-[#F85559] mask mask-star-2 mask-half-1" />
                                        <input type="radio" name="rating-10" class="bg-[#F85559] mask mask-star-2 mask-half-2" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="modal-action flex justify-center">
                            <button class="btn btn-outline btn-error">Close</button>
                        </div>
                    </form>
                </dialog>
            }

        </div>
    );
};

export default AllBlogCard;