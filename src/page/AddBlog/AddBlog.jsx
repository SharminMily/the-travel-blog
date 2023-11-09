import React, { useEffect, useState } from 'react';
import { FaPenNib } from 'react-icons/fa';
import AddBlogCard from './AddBlogCard';


const AddBlog = () => {


    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

    fetch('https://travel-blog-server.vercel.app/allData')
    .then(res => res.json())
    .then(data => setBlogs(data))
    }, []);

   console.log(setBlogs)




    return (
        <div className='m-20'>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    blogs.map(blog => <AddBlogCard key={blog._id} blog={blog}></AddBlogCard>)
                }
            </div>
        </div>
    );
};

export default AddBlog;