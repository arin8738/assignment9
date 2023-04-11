import React from 'react';

const JobList = ({list}) => {
    console.log(list)
    return (
        <div className='bg-gray-100 text-left p-10 rounded-md'>
            <div className='bg-gray-200 w-16 rounded-md'>
                <img src={list.logo} alt="" className='w-full rounded-md' />
            </div>
            <h4 className='text-lg font-semibold mb-2 mt-8'>{list.name}</h4>
            <h3 className='text-base text-slate-600'>{list.jobs}jobs Available</h3>
            
        </div>
    );
};

export default JobList;