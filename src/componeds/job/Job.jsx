import React from 'react';
import JobList from '../joblist/JobList';

const Job = ({JobCList}) => {
    return (
        <div className='text-center mt-16'>
            <h1 className='font-bold text-4xl pb-3'>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid-cols-4 gap-4 grid '>
                {
                    JobCList.map(list=> <JobList key = {list.id} list={list}></JobList>)
                }

            </div>
        </div>
    );
};

export default Job;