import React from 'react';

const WishlistCart = ({ blogs }) => {
    // console.log(blogs)
    const  { _id, title, date, category_name, country_name, description, long_description, image } = blogs;

    const handleRemove = (_id) => {
        localStorage.clear(_id)
        // setBlog([]);
        // setNoFound(' No Blog Found')
        console.log('delete')

    }


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-full h-full' src={image} alt="Album" /></figure>
                <div className="card-body">
                <h2 className="card-title">{category_name}</h2>
                    <h2 className="card-title">{title}!</h2>
                    <p>{long_description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleRemove} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistCart;