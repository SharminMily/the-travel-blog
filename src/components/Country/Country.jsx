import React from 'react';
import { Link } from 'react-router-dom';
import "./../Banner/styles.css"
import Banner from './../Banner/Banner';

const Country = ({ category }) => {
    const { category_name, image } = category;


    return (
        <div className="animations " >
            <Link to={"/allBlogs"}>

                <div className="country  ">                  

                    <div className="ttt card pt-8">
                        <figure><img  style={{ borderRadius: '35px 0px 35px 0px' }} className='w-40 border-4 border-white bg-[#106888] h-40 rounded-full' src={image} alt="Shoes" /></figure>
                    </div>

                    <div className="tts flex justify-center relative">
                        <button className='btn mt-3 text-white bg-gradient-to-r from-[#106888] via-cyan-500 to-[#106888] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  me-2 mb-2'>{category_name}</button>
                    </div>                  
                </div>

            </Link>
        </div>
    );
};

export default Country;



