import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    return (
        <div className='bg-cyan-100 '>
            <div className=' nav flex  justify-around pt-5 pb-8'>
                <div><h2 className='font-bold text-3xl text-blue-950 mt-3 nav-title'> JOBHunt</h2></div>
                <div>
                    <ul className='flex justify-center gap-8 mt-3'>
                        <Link to="/">Home</Link>
                        <Link to="/Statistics">Statistics</Link>
                        <Link to="/Applied-Jobs">Applied Jobs</Link>
                        <Link to="/Blog">Blog</Link>
                    </ul>
                </div>
                <div>
                    <button className=' nav-btn bg-blue-500 pt-3 font-semibold text-white pb-3 pl-5 pr-5 rounded-md mt-3 '><Link>Start Applying</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Nav;