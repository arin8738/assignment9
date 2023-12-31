import React, { useEffect, useState } from 'react';
import FJob from './FJob';
import { Link } from 'react-router-dom';
import './FeaturedJobs.css'

const FeaturedJobs = () => {

    let [isClicked, setIsClicked] = useState(0);
    const seeAllJobs = () => {
        setIsClicked(isClicked + 1);
    }

    let [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("/Featuredjobs.json")
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    let [c, setC] = useState(false);

    if (!isClicked) {
        jobs = jobs.slice(0, 4);
    }

    return (
        <div className=' feature py-8 md:px-40 sm:px-0 sm:pl-6  my-20 text-center '>
            <h3 className='font-bold text-4xl mb-4 sm:mr-5 md:ml-5'>Featured Jobs</h3>
            <p className='jobCategory-p text-base mb-9 sm:mr-5 md:ml-5'>Explore thousands of jobs opportunities with all information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                {
                    jobs.map(job => <FJob key={job.id} job={job}></FJob>)
                }
            </div>
            {
                !isClicked &&
                <button id='seeAllJobs' className='mt-10 mb-32 py-2 px-3 bg-blue-500 pt-3 font-semibold text-white rounded-md w-40 h-16 mx-auto' onClick={seeAllJobs}>
                    <Link className='bg-blue-500 pt-3 font-semibold text-white'>See All Jobs</Link>
                </button>
            }
        </div>
    );
};

export default FeaturedJobs;