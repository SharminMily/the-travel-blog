import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
const Booking = () => {
    return (

        
        <div className='bg-[#106888] mt-12 text-white p-8'>
            <h1 className='text-center text-3xl pb-8 font-semibold py-4'>Book Yours Perfect Destinations</h1>

            <div className="flex justify-center items-center pb-6">
                <div className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-4 items-center '>
                    <div className='bg-white flex justify-center items-center text-center  text-black rounded-xl h-20 w-72'>
                    <FaLocationDot className='text-2xl'/>
                        <p className='text-xl font-semibold'>Going To</p>
                    </div>
                    <div className='bg-white flex justify-center items-center gap-2 text-center  text-black rounded-xl font-semibold h-20 w-72'>
                    <FaCalendarDays className='text-2xl'/>
                        <p className='text-lg  
                        font-semibold text-start'>Dates <br /> <span>Nov 8 - Nov 14</span></p>
                       
                    </div>
                    <div className='bg-white text-center  text-black flex justify-center items-center rounded-xl font-semibold h-20 w-72'>
                    <IoPeopleSharp  className='text-2xl'/>
                        <p className='text-xl  
                        font-semibold'>Booking</p>
                       
                    </div>
                    {/* <div>
                        <button className="btn mt-3 text-white bg-gradient-to-r from-[#106888] via-cyan-500 to-[#106888] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-12 py-3 text-center  mb-2">Booking</button>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Booking;