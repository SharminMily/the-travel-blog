import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [showPassword, setPassword] = useState(false)
    const {login, user } = useAuth()

    const handleSubmit = async(e) => {
        e.preventDefault()      
        const email = e.target.email.value        
        const password = e.target.password.value
        console.log('hello', email, password)

        
        try{
            await login(email, password)
            console.log('login', user)
         }
         catch(err) {
             console.log(err)
         }
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                    <h1 className="text-3xl p-6 font-bold text-blue-700 ">Login Now...</h1>

                    <div className="card w-full max-w-sm shadow-2xl bg-base-100 px-10" data-aos="zoom-in">
                        <div className="pb-8">

                            <form onSubmit={handleSubmit} className="card-body ">                          
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input  input-bordered md:px-10" name='email' />
                                </div>                           
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <div className="mb-6">
                                        <input type={showPassword ? "text" : "password"} placeholder="password" className="input absolute input-bordered md:px-7" name='password' />
                                        <span onClick={() => setPassword(!showPassword)}>{showPassword ? <FaEye className="relative top-4 md:left-52 left-48"></FaEye> : <FaEyeSlash className="relative top-4 md:left-52 left-48"></FaEyeSlash>} </span>

                                    </div>

                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button className="btn bg-blue-700 text-white hover:bg-black" type='submit'>Login</button>
                                </div>
                            </form>


                            <label className="label">
                                create an account? <Link to="/register" className="label-text-alt link link-hover text-blue-700  font-bold underline">Please Register</Link>
                            </label>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;