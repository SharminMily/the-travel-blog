import React from 'react';
import toast from 'react-hot-toast';

const NewsLetter = () => {


    const handleSubscribe = (e) => {
        e.preventDefault() 
        const email = e.target.email.value;        
        const password = e.target.password.value;
        console.log('hello', email, password)
        toast.success('Successfully Subscribe!')        
    }




    return (
        <div className='my-16 w-full max-w-[1200px] mx-auto'>
            <h1 className="text-center text-4xl text-blue-700 font-bold"> News Letter Subscribe</h1>
            <p className='text-center pt-4 text-blue-700 mb-16'>Subscribe the news and see more info. </p>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-blue-700">News <span className='text-black'>Wring</span></h1>
                        <p className="py-6">New York City, the city that never sleeps, offers an array of experiences from <br /> Broadway shows to iconic landmarks like the Statue of Liberty.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
                        <form onSubmit={handleSubscribe} className="card-body p-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">something new </span>
                                </label>
                                <textarea type="text" name='text' placeholder="your blogs writing here" className="input input-bordered h-32" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit'className='btn mt-2 shadow-lg shadow-slate-600 bg-blue-700 normal-case hover:bg-blue-800 text-xl text-white'>subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;