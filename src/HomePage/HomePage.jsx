import React from 'react';
import Banner from '../Components/HomePage/Banner';
import Stats from '../Components/HomePage/Stats';
import TrendingApps from '../Components/HomePage/TrendingApps';
import { useLoaderData } from 'react-router';

const HomePage = () => {

    const data = useLoaderData()
    // console.log('data from home page:', data);

    return (
        <>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </>
    );
};

export default HomePage;