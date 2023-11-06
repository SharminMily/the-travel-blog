import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import SocialLogin from './SocialLogin';
import toast from 'react-hot-toast';

const Register = () => {
    const [showPassword, setPassword] = useState(false)
    const {createUser, user } = useAuth()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const img = e.target.img.value
        const password = e.target.password.value
        console.log('hello', name, email, img, password)

        
        try{
            await createUser(email, password)
            console.log('Create', user)
            toast.success('Successfully create user!')
         }
         catch(err) {
             console.log(err)
         }
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                    <h1 className="text-3xl p-6 font-bold text-blue-700 ">Please Register Here...</h1>

                    <div className="card w-full max-w-sm shadow-2xl bg-base-100 px-10" data-aos="zoom-in">
                        <div className="pb-8">

                            <form onSubmit={handleSubmit} className="card-body ">
                                <div className="form-control ">
                                    <label className="label ">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Full name" className="input input-bordered md:px-10" name='name' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input  input-bordered md:px-10" name='email' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" placeholder="image url" name='img' className="input input-bordered md:px-10" />
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
                                    <button className="btn bg-blue-700  text-white hover:bg-black" type='submit'>Register</button>
                                </div>
                            </form>


                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover text-blue-700  font-bold underline">Please Login</Link>
                            </label>                          
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;