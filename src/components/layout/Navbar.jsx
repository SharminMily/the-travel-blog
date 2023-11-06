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
                    className={({ isActive }) => isActive ? 'btn bg-black hover:bg-black ml-2 text-white btn-sm' : 'btn btn-white btn-sm normal-case ml-'}>Home</NavLink>
                <NavLink to="/addBlog"
                    className={({ isActive }) => isActive ? 'btn bg-black hover:bg-black ml-2 text-white btn-sm' : 'btn btn-white btn-sm normal-case ml-2'}>Add Blog</NavLink>
                <NavLink to="/allBlogs"
                    className={({ isActive }) => isActive ? 'btn bg-black hover:bg-black ml-2 text-white btn-sm' : 'btn btn-white btn-sm normal-case ml-2'}>All Blogs</NavLink>
                <NavLink to="/featureBlog"
                    className={({ isActive }) => isActive ? 'btn bg-black hover:bg-black ml-2 text-white btn-sm' : 'btn btn-white btn-sm normal-case ml-2'}>Feature Blog</NavLink>
                <NavLink to="/wishList"
                    className={({ isActive }) => isActive ? 'btn bg-black hover:bg-black ml-2 text-white btn-sm' : 'btn btn-white btn-sm normal-case ml-2'}>Wish List</NavLink>

                {/* <NavLink to="/login"
                    className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>LogIn</NavLink> */}

                {/* {user?.email ? (
                    <button onClick={logout} className='btn'>LogOut</button>
                )
                    :
                    <NavLink to="/login"
                        className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink>
                } */}

               {/* { user?.email ? <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} alt={user.displayName} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <button className="btn btn-sm  btn-ghost">{user?.displayName || user?.email}</button>

                        </li>
                        <li>
                            <button onClick={logOut}
                                className="btn btn-sm  btn-ghost">Logout</button>

                        </li>
                    </ul>
                </div>
                :
                <NavLink to="/register"><a className="btn">register</a></NavLink>
                    }
          */}


        </div>
        </div >
    );
};

export default Navbar;