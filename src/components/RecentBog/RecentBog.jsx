import React, { useEffect, useState } from 'react';
import AllBlogCard from '../../page/AllBlogs/AllBlogCard';

const RecentBog = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('https://travel-blog-server.vercel.app/allData')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);
    // console.log(allData)


    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className="text-center text-4xl text-blue-700 font-bold">Recent Blog Posts </h1>
            <p className='text-center mb-16'>A Journey Through Country/Regions Culinary Delights
                <br></br> Explore the diverse cuisine of a particular country or region, detailing unique dishes, food markets, and the cultural </p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 items-center'>
                {
                    allData.slice(0, 6).map(category => <AllBlogCard key={category._id} category={category}></AllBlogCard >)
                }

            </div>
        </div>
    );
};

export default RecentBog;