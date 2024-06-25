import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    // const { user, logOut } = useAuth();
    // console.log(user)
    return (
        <div>
            <div className='font-2xl normal-case '>
                {/* Navbar menu content here */}
                <NavLink to="/"
                    className={({ isActive }) => isActive ? 'btn bg-[#106888] hover:bg-black ml-2 text-white btn-md' : 'btn bg-[#106888] text-white btn-white btn-md normal-case ml-2'}>Home</NavLink>

                {/* <NavLink to="/category"
                    className={({ isActive }) => isActive ? 'btn bg-black hover:bg-black ml-2 text-white btn-sm' : 'btn btn-white btn-sm normal-case ml-2'}>category</NavLink>      */}

                <NavLink to="/allBlogs"
                    className={({ isActive }) => isActive ? 'btn bg-black hover:bg-black ml-2 text-white btn-md' : 'btn bg-[#106888] text-white btn-white btn-md normal-case ml-2'}>All Blogs</NavLink>            

                          
                <NavLink to="/featureBlog"
                    className={({ isActive }) => isActive ? 'btn bg-black hover:bg-black ml-2 text-white btn-md' : 'btn bg-[#106888] text-white btn-white btn-md normal-case ml-2'}>Feature Blog</NavLink>
                <NavLink to="/wishList"
                    className={({ isActive }) => isActive ? 'btn bg-black hover:bg-black ml-2 text-white btn-md' : 'btn btn-white bg-[#106888] text-white btn-md normal-case ml-2'}>Wish List</NavLink>             


        </div>
        </div >
    );
};

export default Navbar;