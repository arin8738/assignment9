import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';
import Job from '../job/Job';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Outlets = () => {
    const JobCList = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Job JobCList ={JobCList}></Job>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Outlets;