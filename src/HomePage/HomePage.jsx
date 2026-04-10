import React from 'react';
import Banner from '../Components/HomePage/Banner';
import Stats from '../Components/HomePage/Stats';
import TrendingApps from '../Components/HomePage/TrendingApps';

const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </>
    );
};

export default HomePage;