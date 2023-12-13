import React, { useState } from 'react';
import useData from '../../hooks/useData';
import CategoryItems from './CategoryItems';
import Tabs from './AllTabs';
import CategoryTabs from './CategoryTabs';
import { TabPanel } from 'react-tabs';
import AllTabs from './AllTabs';


const Category = ({item}) => {
    console.log(item)

    const [data] = useData();
    const america = data.filter(item => item.category_name === 'America');
    const switzerland = data.filter(item => item.category_name === 'Switzerland');
    const australia = data.filter(item => item.category_name === 'Australia');
    const saudi_Arabia = data.filter(item => item.category_name === 'Saudi Arabia');
    const france = data.filter(item => item.category_name === 'France');
    const china = data.filter(item => item.category_name === 'China');


    return (
        <div>
            <div>
                {/* <CategoryTabs></CategoryTabs> */}
            </div>
            {/* <CategoryItems item={america}></CategoryItems >
            <CategoryItems item={switzerland}></CategoryItems >
            <CategoryItems item={australia}></CategoryItems >
            <CategoryItems item={saudi_Arabia}></CategoryItems >
            <CategoryItems item={france}></CategoryItems >
            <CategoryItems item={china}></CategoryItems > */}


            {/* <TabPanel>
                <AllTabs items={america}></AllTabs>
            </TabPanel> */}
        </div>
    );
};

export default Category;