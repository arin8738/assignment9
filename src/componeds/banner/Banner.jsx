import React from 'react';

const Banner = () => {
    return (
        <div className='flex w-3/4 mx-auto'>
            <div className='h-4/5 my-auto'>
                <h1 className='text-6xl font-semibold mb-3 '>One Step <br /> Closer To Your <br /><span className='text-blue-700'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='bg-blue-500 pt-3 font-semibold text-white pb-3 pl-5 pr-5 rounded-md mt-6'>Get Started</button>
            </div>
            <div className='w-9/12 h-3/4'>
                <img src="/public/All Images/P3OLGJ1 copy 1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;