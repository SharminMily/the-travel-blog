import React from 'react';

const InfoImage = () => {
    return (
        <div className='my-12'>
            {/* <h1 className="text-center font-bold text-[#c4d1d6] text-4xl mb-8">The nature Travel Blogs</h1> */}

            <div className="">
            <h1 className="text-center md:text-5xl text-4xl text-[#e9f0f3] font-bold bg-gradient-to-r from-blue-100 via-blue-500 to-purple-100 bg-clip-text text-transparent">
            The nature Travel
            </h1>

            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="">
                <h1 className="mb-5 md:text-5xl text-4xl font-bold  bg-gradient-to-r from-blue-100 via-blue-500 to-purple-100 bg-clip-text text-transparent">Blogs...</h1>
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

          <p className='text-gray-300 text-center pb-10'>
          “Nature is the source of all true knowledge.” –Leonardo da Vinci
          </p>

            <div className="hero px-10 min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex-1 gap-4 grid grid-cols-2">
                        <img src="https://i.ibb.co/NFB7TZG/chinapic2.png" className=" rounded-lg shadow-2xl" />
                        <img src="https://i.ibb.co/NFB7TZG/chinapic2.png" className=" rounded-lg shadow-2xl" />
                        <img src="https://i.ibb.co/NFB7TZG/chinapic2.png" className=" rounded-lg shadow-2xl" />
                        <img src="https://i.ibb.co/NFB7TZG/chinapic2.png" className=" rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-3xl font-serif font-bold text-[#1a84aa]">nature Travel Blogs!</h1>
                        <p className="py-6">
                            Natural travel blogs often encapsulate the beauty and essence of untouched landscapes, offering a serene escape from the urban hustle. These destinations immerse visitors in unspoiled environments, evoking a sense of wonder and tranquility..</p>
                            <p className='pb-6'>
                            Picture crystal-clear waters glistening under the sun, meandering through lush forests, or standing in awe of majestic mountains standing tall against the horizon. These blogs narrate tales of exploring hidden gems, witnessing diverse wildlife, and connecting with the Earth's raw, unaltered beauty.
                            </p>
                        <div className="flex gap-4">
                        <button className="btn mt-3 text-white bg-gradient-to-r from-[#106888] via-cyan-500 to-[#106888] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">More details</button>
                        <button className="btn mt-3 btn-outline shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See news</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoImage;