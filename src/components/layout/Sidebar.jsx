import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='flex flex-col gap-2 normal-case'>
            <NavLink to="/"
                className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm normal-case'}>Home</NavLink>
                   <NavLink to="/allBlogs"
                    className={({ isActive }) => isActive ? 'btn bg-black hover:bg-black ml-2 text-white btn-sm' : 'btn btn-white btn-sm normal-case ml-2'}>All Blogs</NavLink>   
            {/* <NavLink to="/addBlog"
                className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm normal-case'}>Add Blog</NavLink>
            <NavLink to="/allBlogs"
                className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm normal-case'}>All Blogs</NavLink> */}
            <NavLink to="/featureBlog"
                className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm normal-case'}>Feature Blog</NavLink>
            <NavLink to="/wishList"
                className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm normal-case'}>Wish List</NavLink>
        </div>
    );
};

export default Sidebar;