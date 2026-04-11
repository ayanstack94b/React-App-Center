import React from 'react';
import { FaStar } from 'react-icons/fa';

const Appcard = ({app}) => {
    return (
        <div>

            <div className="card bg-base-100  shadow-sm">
                <figure>
                    <img className='h-50 w-auto rounded '
                        src={app.image}
                        alt={app.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{app.title}</h2>

                    <div className="flex justify-between items-center gap-4">
                        <span className="bg-green-100 text-green-500 flex items-center gap-1 px-4 py-1 fond-semibold rounded-lg">{app.downloads}</span>

                        <span className="bg-orange-100 text-orange-500 flex items-center gap-1 px-4 py-1 fond-semibold rounded-lg"><FaStar></FaStar> {app.ratingAvg}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appcard;