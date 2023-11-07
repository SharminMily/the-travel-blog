import React, { useEffect, useState } from 'react';
import AllBlogCard from './AllBlogCard';

const AllBlogs = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alldata')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);
    // console.log(allData)

    return (
        <div className='my-16 w-full max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 items-center'>

            {
                allData.map(category => <AllBlogCard key={category._id} category={category}></AllBlogCard >)
            }
            
        </div>
    );
};

export default AllBlogs;