import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='font-2xl normal-case'>
                {/* Navbar menu content here */}
                <NavLink to="/"
                    className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm normal-case'}>Home</NavLink>
                <NavLink to="/addBlog"
                    className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm normal-case'}>Add Blog</NavLink>
                <NavLink to="/allBlogs"
                    className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm normal-case'}>All Blogs</NavLink>
                <NavLink to="/featureBlog"
                    className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm normal-case'}>Feature Blog</NavLink>
                <NavLink to="/wishList"
                    className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm normal-case'}>Wish List</NavLink>

                {/* <NavLink to="/login"
                    className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>LogIn</NavLink> */}

                {/* {user?.email ? (
                    <button onClick={logout} className='btn'>LogOut</button>
                )
                    :
                    <NavLink to="/login"
                        className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink>
                } */}


            </div>
        </div>
    );
};

export default Navbar;