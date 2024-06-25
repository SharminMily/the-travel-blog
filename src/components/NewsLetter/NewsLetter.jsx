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
            {/* <h1 className="text-center text-4xl text-[#c3d4da] font-bold"> News Letter Subscribe</h1> */}

                
          <div className="">
            <h1 className="text-center md:text-5xl text-4xl text-[#e9f0f3] font-bold bg-gradient-to-r from-blue-100 via-blue-500 to-purple-100 bg-clip-text text-transparent">
            News Letter 
            </h1>

            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="">
                <h1 className="mb-5 md:text-5xl text-4xl font-bold  bg-gradient-to-r from-blue-100 via-blue-500 to-purple-100 bg-clip-text text-transparent">Subscribe...</h1>
              </div>

              <div className="">
                <img
                  className="rounded-full md:w-12 w-8"
                  src="https://i.ibb.co/PFLN3XG/giphy.gif"
                  alt=""
                />
              </div>
            </div>
          </div>


            <p className='text-center pt-4 mb-16 text-gray-300'>Subscribe the news and see more info. </p>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold text-[#1a84aa]">News <span className='text-black'>Wring</span></h1>
                        <p className="py-4">New York City, the city that never sleeps, offers an array of experiences from <br /> Broadway shows to iconic landmarks like the Statue of Liberty.</p>
                    </div>
                    <div className="card border-4 bg-base-200 border-[#106888] flex-shrink-0 w-full max-w-sm shadow-2xl p-10">
                        <form onSubmit={handleSubscribe} className="card-body  p-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#1a84aa] font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input bg-base-200 input-bordered border-2  border-[#106888]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#1a84aa] font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input bg-base-200 border-2 border-[#106888] input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#1a84aa] font-semibold">something new </span>
                                </label>
                                <textarea type="text" name='text' placeholder="your blogs writing here" className="input  bg-base-200 border-2 border-[#106888] input-bordered h-32" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit'className='btn mt-3 text-white bg-gradient-to-r from-[#106888] via-cyan-500 to-[#106888] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;