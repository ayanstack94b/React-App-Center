import React, { use } from 'react';

const appsPromise = fetch('/data.json').then((res)=> res.json())

const TrendingApps = () => {

    const apps = use(appsPromise)
console.log(apps);
    return (
        <div className='mb-8 text-center my-20 space-y-5'>
            <h2 className="font-bold text-4xl">Trending Apps</h2>
            <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus deserunt quo, iusto animi ad assumenda quasi mollitia? Unde, facilis?</p>
        </div>
    );
};

export default TrendingApps;