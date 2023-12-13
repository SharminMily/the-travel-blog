import React, { useEffect, useState } from 'react';
import { FaPenNib } from 'react-icons/fa';
import AddBlogCard from './AddBlogCard';
import { useLoaderData } from 'react-router-dom';
import useData from '../../hooks/useData';


const AddBlog = () => {


    const [data] = useData();
    const America = menu.filter(item => item.category_name === 'America');
    const Switzerland = menu.filter(item => item.category_name === 'Switzerland');
    const salad = menu.filter(item => item.category_name === 'Australia');
    const Saudi_Arabia = menu.filter(item => item.category_name === 'Saudi Arabia');
    const France = menu.filter(item => item.category_name === 'France');
    const China = menu.filter(item => item.category_name === 'China');

    // const category = useLoaderData()
    // console.log(category)


    //     const [blogs, setBlogs] = useState([]);

    //     useEffect(() => {

    //     fetch('travel-blog-server.vercel.app/category/:category_name')
    //     .then(res => res.json())
    //     .then(data => setBlogs(data))
    //     }, []);

    //    console.log(blogs)




    return (
        <div className='m-20'>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {/* {
                    blogs.map(blog => <AddBlogCard key={blog._id} blog={blog}></AddBlogCard>)
                } */}

                {/* <AddBlogCard item={America}></AddBlogCard> */}

            </div>
        </div>
    );
};

export default AddBlog;