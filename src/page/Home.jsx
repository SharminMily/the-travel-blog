import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import RecentBog from '../components/RecentBog/RecentBog';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Country from '../components/Country/Country';

const Home = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    // console.log(categories)



    return (
        <div className=''>
            <div className='max-w-[1200px] mx-auto'>
                <Banner></Banner>
                {/* recent blog section */}
                <div className='my-16 w-full max-w-[1200px] mx-auto'>
                    <h1 className="text-center text-4xl text-blue-700 font-bold">Travel Country blog</h1>
                    <p className='text-center mb-6'>A Journey Through Country/Regions Culinary Delights
                        <br></br> Explore the diverse cuisine of a particular country or region, detailing unique dishes, food markets, and the cultural </p>                    
                    <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4 items-center'>
                        {
                            categories.map(category => <Country key={category._id} category={category}></Country>)
                        }
                    </div>
                </div>

                <RecentBog></RecentBog>
                <NewsLetter></NewsLetter>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;