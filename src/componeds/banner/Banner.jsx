import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css'
import bannerImg from "../../../public/All Images/P3OLGJ1 copy 1.png";
const Banner = () => {
    return (
        <div className='main-div flex   lg:px-80   bg-cyan-100'>
            <div className='h-4/5 my-auto'>
                <h1 className='text-6xl   font-semibold mb-3 banner-title '>One Step <br /> Closer To Your <br /><span className='text-blue-700'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className=' banner-btn flex justify-center bg-blue-500 pt-3  pb-3 pl-5 pr-5 rounded-md mt-6'> <Link className='font-semibold text-white'>Get Started</Link> </button>
            </div>
            <div className='w-9/12 h-3/4 banner-img'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;