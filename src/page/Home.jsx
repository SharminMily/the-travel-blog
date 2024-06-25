import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import RecentBog from "../components/RecentBog/RecentBog";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Country from "../components/Country/Country";
import InfoImage from "../components/InfoImage/InfoImage";
import Booking from "../components/Boking/Booking";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://travel-blog-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories)

  return (
    <>
      <div className="">
        <Banner></Banner>

        {/* recent blog section */}
        <div className="mt-0 pt-0 mb-16 w-full max-w-[1200px] mx-auto">


          <div className="">
            <h1 className="text-center md:text-6xl text-4xl text-[#e9f0f3] font-bold bg-gradient-to-r from-blue-100 via-blue-500 to-purple-100 bg-clip-text text-transparent">
              Travel Country 
            </h1>

            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="">
                <h1 className="mb-5 md:text-6xl text-4xl  font-bold  bg-gradient-to-r from-blue-100 via-blue-500 to-purple-100 bg-clip-text text-transparent">Blogs...</h1>
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


          <p className="text-center mt-2 text-gray-200 mb-6">
            A Journey Through Country/Regions Culinary Delights
            <br></br> Explore the diverse cuisine of a particular country or
            region, detailing unique dishes, food markets, and the cultural{" "}
          </p>
          <div className="grid mt-20 lg:px-6 px-8 py-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 items-center bg-gray-200">
            {categories.map((category) => (
              <Country key={category._id} category={category}></Country>
            ))}
          </div>
        </div>

        <RecentBog></RecentBog>
        <Booking></Booking>
        <NewsLetter></NewsLetter>
        <InfoImage></InfoImage>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
