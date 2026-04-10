import React from 'react';

const Stats = () => {
    return (
        <div className='bg-purple-500 h-[60vh] font-bold text-5xl text-center p-8 '>
            <p className="text-5xl text-white py-10">Trusted by Millions, Built for You</p>

            <div className="flex max-w-5xl mx-auto items-center justify-between gap-5 mt-8">
                <div className="text-center space-y-3">
                    <p className="text-sm text-white opacity-85">Total Downloads</p>
                    <h1 className="font-bold text-5xl text-white">29.6M</h1>
                    <p className="text-sm text-white opacity-85">21% more than last month</p>
                </div>
                <div className="text-center space-y-3">
                    <p className="text-sm text-white opacity-85">Total Reviews</p>
                    <h1 className="font-bold text-5xl text-white">906K</h1>
                    <p className="text-sm text-white opacity-85">46% more than last month</p>
                </div>
                <div className="text-center space-y-3">
                    <p className="text-sm text-white opacity-85">Active Apps</p>
                    <h1 className="font-bold text-5xl text-white">132+</h1>
                    <p className="text-sm text-white opacity-85">31 more will Launch</p>
                </div>
                
                
            </div>
        </div>
    );
};

export default Stats;