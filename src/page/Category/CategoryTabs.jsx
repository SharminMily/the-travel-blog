import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useData from '../../hooks/useData';
import AllTabs from './AllTabs';

const CategoryTabs = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const [data] = useData();
    const america = data.filter(item => item.category_name === 'America');
    const switzerland = data.filter(item => item.category_name === 'Switzerland');
    const australia = data.filter(item => item.category_name === 'Australia');
    const saudi_Arabia = data.filter(item => item.category_name === 'Saudi Arabia');
    const france = data.filter(item => item.category_name === 'France');
    const china = data.filter(item => item.category_name === 'China');


    return (
        <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className='flex justify-center gap-2 mt-16'>
                    <Tab><button className='btn shadow-lg shadow-slate-600 bg-blue-600 normal-case hover:bg-blue-800 text-xl text-white'>
                        America</button></Tab>

                    <Tab><button className='btn shadow-lg shadow-slate-600 bg-blue-600 normal-case hover:bg-blue-800 text-xl text-white'>
                        Switzerland</button></Tab>

                    <Tab><button className='btn shadow-lg shadow-slate-600 bg-blue-600 normal-case hover:bg-blue-800 text-xl text-white'>
                        Australia</button></Tab>

                    <Tab><button className='btn shadow-lg shadow-slate-600 bg-blue-600 normal-case hover:bg-blue-800 text-xl text-white'>
                        Saudi Arabia</button></Tab>

                    <Tab><button className='btn shadow-lg shadow-slate-600 bg-blue-600 normal-case hover:bg-blue-800 text-xl text-white'>
                        France</button></Tab>

                    <Tab><button className='btn shadow-lg shadow-slate-600 bg-blue-600 normal-case hover:bg-blue-800 text-xl text-white'>
                        China</button></Tab>
                </div>
                <TabPanel>
                    <AllTabs items={america}></AllTabs>
                </TabPanel>
                <TabPanel>
                    <AllTabs items={switzerland}></AllTabs>
                </TabPanel>
                <TabPanel>
                    <AllTabs items={australia}></AllTabs>
                </TabPanel>
                <TabPanel>
                    <AllTabs items={saudi_Arabia}></AllTabs>
                </TabPanel>
                <TabPanel>
                    <AllTabs items={france}></AllTabs>
                </TabPanel>
                <TabPanel>
                    <AllTabs items={china}></AllTabs>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default CategoryTabs;