import React from 'react';
import Items from './Items';

const AllTabs = ({items}) => {
   
    

    return (
        <div className='m-20 lg:mx-32  grid md:grid-cols-2 gap-10'>
            {
                 items.map(item => <Items key={item._id} item={item}></Items>)
            }
           
        </div>
    );
};

export default AllTabs;