import React from 'react';
import { Link } from 'react-router';
import error from '../../../src/assets/images/error-404.png'
const NotFoundPage = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
                <div className="text-center max-w-md">

                    <img src={error} alt="Error illustration" className="mx-auto w-60 mb-6" />

                    <h1 className="text-5xl font-bold text-error">404</h1>
                    <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>

                    <p className="py-4 text-gray-500">
                        The page you are looking for does not exist or has been moved.
                    </p>

                    <Link to="/">
                        <button className="btn bg-purple-500 text-white rounded mt-4">
                            Go back home
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;