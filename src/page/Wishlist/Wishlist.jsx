import React, { useEffect, useState } from 'react';

import WishlistCart from './WishlistCart';
import toast from 'react-hot-toast';

const Wishlist = () => {
    const [blog, setBlog] = useState([]);
    const [notFound, setNoFound] = useState(false);
    const [isSee, setIsSee] = useState(false)
    console.log(blog)

    useEffect(() => {
        const wishlistItem = JSON.parse(localStorage.getItem('blog'));
        if (wishlistItem) {
            setBlog(wishlistItem)
        }
        else {
            setNoFound(' No Blog Found')
        }

    }, [])

    const handleRemove = () => {
        localStorage.clear()
        setBlog([]);
        setNoFound(' No Blog Found')
        toast.success("delete successfully")

    }

    // console.log(donation)

    return (
        <div>
            Wishlist
            <div>
                {
                    notFound ? <p className='h-[80vh] flex justify-center items-center text-red-500'>{notFound}</p> : <div>

                        {blog.length > 0 && <button onClick={handleRemove} className='p-4 bg-red-500 text-white rounded-lg mx-auto block'>delete All</button>}

                        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 max-w-5xl mx-auto mt-10'>
                            {
                                isSee ? blog.map(blogs => <WishlistCart key={blogs._id} blogs={blogs}></WishlistCart>) :
                                    blog.slice(0, 4).map(blogs => <WishlistCart key={blogs._id} blogs={blogs}></WishlistCart>)
                            }
                        </div>
                    </div>
                }

                <div className='text-center my-8'>
                    {/* {donation.length > 4 && <button onClick={()=>setIsSee(!isSee)}  className='p-4 bg-blue-700  text-white rounded-lg mx-auto block'> {isSee ? "See less" : "See All"} </button>   
                }  */}
                    {blog.length > 4 && !isSee && (
                        <button
                            onClick={() => setIsSee(!isSee)}
                            className='p-4 bg-blue-700 text-white rounded-lg mx-auto block'
                        >
                            See All
                        </button>
                    )}
                </div>


            </div>

        </div>
    );
};

export default Wishlist;