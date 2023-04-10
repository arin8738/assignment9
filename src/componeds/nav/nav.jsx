import React from 'react';
// import './nav.css'

const Nav = () => {
    return (
        <div className=''>
            <div className='flex justify-around mt-5 mb-8'>
                <div><h2 className='font-extrabold text-3xl mt-3'>CareerHub</h2></div>
                <div>
                    <ul className='flex gap-8 mt-3'>
                        <li>Statistics</li>
                        <li>Applied Jobs</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <button className='bg-blue-500 pt-3 font-semibold text-white pb-3 pl-5 pr-5 rounded-md mt-3 '>Start Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;