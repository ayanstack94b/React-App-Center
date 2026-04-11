import React from 'react';
import logo from '../../../src/assets/images/logo.png'
import { Link, NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {

    return (
        <div>
            <nav className='shadow-md p-5 mb-5'>
                <div className="flex justify-between gap-5 items-center bg-white  container mx-auto">
                    <img src={logo} className='w-10' alt="" />
                    <ul className='flex justify-between gap-5 items-center font-semibold'> 
                        <li><NavLink to={'/'} className={({ isActive})=> `${isActive ? 'text-purple-500 border-b border-purple-500 font-semibold pb-2': ''}`}>Home</NavLink></li>
                        <li><NavLink to={'/apps'} className={({ isActive }) => `${isActive ? 'text-purple-500 border-b border-purple-500 font-semibold pb-2' : ''}`} >Apps</NavLink></li>
                        <li><NavLink to={'/installedApps'} className={({ isActive }) => `${isActive ? 'text-purple-500 border-b border-purple-500 font-semibold pb-2' : ''}`}>Installed</NavLink></li>
                    </ul>
                    <button className="btn bg-purple-500 text-white"><FaGithub></FaGithub> Contribute</button>
               </div>
            </nav>
        </div>
    );
};

export default Navbar;