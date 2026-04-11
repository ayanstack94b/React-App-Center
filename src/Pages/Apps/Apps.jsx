import React, { useEffect, useState } from 'react';
import { Atom } from 'react-loading-indicators';
import Appcard from '../../Components/UI/Appcard';

const Apps = () => {

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
        <div className='container mx-auto my-20'>

            <h2 className='text-6xl font-bold text-center'>Our all <span className=" text-purple-500">A</span>pplications</h2>

            {
                loading ? (<div className="flex items-center justify-center">
                    <Atom color="#a631cc" size="large" text="" textColor="" />
                </div>) : (<div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-5 p-4 container mx-auto my-16">

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

export default Apps;