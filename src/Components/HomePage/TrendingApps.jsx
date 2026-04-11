// import React, { use } from 'react';

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Appcard from "../UI/Appcard";

// const appsPromise = fetch('/data.json').then((res)=> res.json())

const TrendingApps = () => {

    //     const apps = use(appsPromise)
    // console.log(apps);

    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json')
            const data = await res.json()
            console.log('data from fetch', data);
            setApps(data);
            setLoading(false)
        };
        fetchData()
    }, [])

    console.log('total apps: ', apps);

    return (
        <div className='mb-8 text-center my-20 space-y-5'>
            <h2 className="font-bold text-4xl">Trending Apps</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem sint aut distinctio ut beatae quis doloribus non consequatur culpa.</p>

            {
                loading ? (<h2>Loading...</h2>) : (<div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-5 p-4 container mx-auto my-16">

                    {
                        apps.map((app, i) => {
                            return <div key={i}>
                                <Appcard key={app.id} app={app}></Appcard>
                            </div>

                        })
                    }
                </div>
                )
            }


        </div>
    );
};

export default TrendingApps;