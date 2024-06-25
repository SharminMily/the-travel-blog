import React, { useEffect, useState } from 'react';
import AllBlogCard from '../../page/AllBlogs/AllBlogCard';

const RecentBog = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);
    // console.log(allData)


    return (
        <div className='max-w-[1200px] mx-auto'>
{/* 
            <h1 className="text-center text-4xl text-[#deebf0] font-bold">Recent Blog Posts </h1> */}


            
          <div className="">
            <h1 className="text-center md:text-5xl text-4xl text-[#e9f0f3] font-bold bg-gradient-to-r from-blue-100 via-blue-500 to-purple-100 bg-clip-text text-transparent">
            Recent Blog 
            </h1>

            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="">
                <h1 className="mb-5 md:text-5xl text-4xl  font-bold  bg-gradient-to-r from-blue-100 via-blue-500 to-purple-100 bg-clip-text text-transparent">Posts...</h1>
              </div>

              <div className="">
                <img
                  className="rounded-full md:w-12 w-8"
                  src="https://i.ibb.co/PFLN3XG/giphy.gif"
                  alt=""
                />
              </div>
            </div>
          </div>



            <p className='text-center mb-16 text-gray-300'>A Journey Through Country/Regions Culinary Delights
                <br></br> Explore the diverse cuisine of a particular country or region, detailing unique dishes, food markets, and the cultural </p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-4 items-center'>
                {
                    allData.slice(0, 6).map(category => <AllBlogCard key={category._id} category={category}></AllBlogCard >)
                }

            </div>
        </div>
    );
};

export default RecentBog;