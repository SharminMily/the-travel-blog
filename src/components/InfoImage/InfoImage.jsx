import React from 'react';

const InfoImage = () => {
    return (
        <div className='my-12'>
            <h1 className="text-center font-bold text-blue-700 text-4xl mb-8">The nature Travel Blogs</h1>
            <div className="hero min-h-screen bg-blue-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex-1 gap-4 grid grid-cols-2">
                        <img src="https://i.ibb.co/NFB7TZG/chinapic2.png" className=" rounded-lg shadow-2xl" />
                        <img src="https://i.ibb.co/NFB7TZG/chinapic2.png" className=" rounded-lg shadow-2xl" />
                        <img src="https://i.ibb.co/NFB7TZG/chinapic2.png" className=" rounded-lg shadow-2xl" />
                        <img src="https://i.ibb.co/NFB7TZG/chinapic2.png" className=" rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-3xl font-serif font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Natural travel blogs often encapsulate the beauty and essence of untouched landscapes, offering a serene escape from the urban hustle. These destinations immerse visitors in unspoiled environments, evoking a sense of wonder and tranquility..</p>
                            <p className='pb-6'>
                            Picture crystal-clear waters glistening under the sun, meandering through lush forests, or standing in awe of majestic mountains standing tall against the horizon. These blogs narrate tales of exploring hidden gems, witnessing diverse wildlife, and connecting with the Earth's raw, unaltered beauty.
                            </p>
                        <button className="btn btn-primary">More details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoImage;