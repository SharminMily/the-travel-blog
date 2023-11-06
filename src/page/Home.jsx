import React from 'react';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import RecentBog from '../components/RecentBog/RecentBog';

const Home = () => {
    return (
       <div>
         <div className='max-w-[1200px] mx-auto'>
            <Banner></Banner>
            <RecentBog></RecentBog>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Home;