import React from 'react';
import JobList from '../joblist/JobList';
import './job.css'

const Job = ({JobCList}) => {
    return (
        <div className='text-center mt-16  '>
            <h1 className='font-bold text-4xl pb-3'>Job Category List</h1>
            <p className='mb-12'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='box md:grid-cols-4 grid-cols-1 gap-6 grid lg:mx-40 '>
                {
                    JobCList.map(list=> <JobList key = {list.id} list={list}></JobList>)
                }

            </div>
        </div>
    );
};

export default Job;