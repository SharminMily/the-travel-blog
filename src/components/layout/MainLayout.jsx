import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';

const MainLayout = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-blue-50 ">
                    <div className=" w-full max-w-[1200px] mx-auto">
                        <div className="">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                        </div>

                        <div className="flex-1 px-2 mx-2">
                            <img className='w-32' src="https://i.ibb.co/NLNPVzG/logo-removebg-preview.png" alt="" />
                            </div>
                        <div className="flex-none hidden lg:block normal-case" >
                            <div className="menu menu-horizontal flex gap-3 normal-case">
                                <Navbar></Navbar>
                            </div>
                        </div>
                        <div className='md:ml-52 mr-4'>
                            <button className='btn'>X</button>
                            <NavLink to="/login"
                                className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm text-blue-700 text-xl normal-case'}>LogIn</NavLink>
                        </div>
                    </div>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 min-h-full bg-base-200 flex flex-col normal-case" >
                    {/* Sidebar content here */}
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;