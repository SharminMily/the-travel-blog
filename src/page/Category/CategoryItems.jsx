import React from 'react';
import Items from './Items';

const CategoryItems = ({item}) => {
    console.log(item)
    return (
        <div className='mx-20'>
            <div className='grid md:grid-cols-3 gap-2'>
                {
                    item.map(item => <Items key={item._id} item={item}></Items>)
                }
            </div>
        </div>
    );
};

export default CategoryItems;