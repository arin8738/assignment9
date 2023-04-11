import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';
import Job from '../job/Job';

const Outlets = () => {
    const JobCList = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Job JobCList ={JobCList}></Job>
        </div>
    );
};

export default Outlets;