import React from 'react';
import { FaPenNib } from 'react-icons/fa';

const Items = ({ item }) => {
    const { _id, title, date, category_name, country_name, description, long_description, image } = item;


    const handleAddToWishlist = () => {
        // console.log(blog)
        const addWishlistArray = [];

        const wishlistItem = JSON.parse(localStorage.getItem('blog'));
        if (!wishlistItem) {
            addWishlistArray.push(blog);
            localStorage.setItem('blog', JSON.stringify(addWishlistArray))
            toast.success("added!", "blog added successfully!", "success");
        }
        else {
            const isExits = wishlistItem.find((blog) => blog._id === _id)

            if (!isExits) {
                addWishlistArray.push(...wishlistItem, blog)
                localStorage.setItem('blog', JSON.stringify(addWishlistArray))
                toast.success("added!", "blog added successfully!", "success");
            }
            else {
                toast.error("already added!", "No duplicate !", "error");
            }


        }

    }


    return (
        <div>
           

            <div className="card mb-6 border-2 bg-base-200 shadow-lg border-[#106888]">
                <div className='flex bg-[#106888] text-white items-center justify-between rounded-t-xl p-2 m- mb-0 gap-8 border-b-0 '>
                    <div className="rounded">
                        <img className='w-10 rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=8" alt="" />
                    </div>
                    <div className="">
                        <h1 className='font-semibold'>Ayesh Piho Shen</h1>
                        <p className='text-gray-300'>{date}</p>
                    </div>
                    <div className='flex text-end items-end justify-end'>
                        <FaPenNib />
                    </div>

                </div>
                <div className="card-body py-1">
                    <h1 className="card-title text-2xl ">{category_name}</h1>
                    <h2 className="font-semibold text-lg">
                        {title}
                    </h2>
                    <p className='pb-0'>{description}</p>

                    <div className="flex mb-2 gap-2">
                        <button onClick={() => document.getElementById(_id).showModal()} className='btn text-white bg-gradient-to-r from-[#106888] via-cyan-500 to-[#106888] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '>More Details</button>

                        {/* <Link to={`/wishlist/${_id}`}><button className="btn  btn-outline btn-primary hover:btn-black">wishlist</button></Link> */}

                        <button onClick={() => handleDetailBtn(_id)} className='btn   focus:outline font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  btn-outline  '>wishlist</button>
                    </div>
                </div>
                <figure><img className='h-80 w-full' src={image} alt="Shoes" /></figure>
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

export default Items;