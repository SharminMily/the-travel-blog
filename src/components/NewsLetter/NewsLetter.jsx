import React from 'react';

const NewsLetter = () => {
    return (
        <div className='my-16 w-full max-w-[1200px] mx-auto'>
            <h1 className="text-center text-4xl text-blue-700 font-bold"> News Letter</h1>
            <p className='text-center pt-4 text-blue-700 mb-16'>Subscribe the news and see more info. </p>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">write <span className='text-blue-700'>news</span></h1>
                        <p className="py-6">New York City, the city that never sleeps, offers an array of experiences from <br /> Broadway shows to iconic landmarks like the Statue of Liberty.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;