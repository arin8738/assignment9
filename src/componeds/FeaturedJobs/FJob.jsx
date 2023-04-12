import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const FJob = ({job}) => {
    return (
        <div className=' rounded-lg p-10 border-2 border-slate-200 text-left'>
            <div>
                <img className='w-40 h-10' src={job.company_logo} alt="company logo" />
            </div>
            <h3 className='mt-8 mb-2 text-2xl'>{job.job_title}</h3>
            <p className='text-xl mb-4 text-slate-600'>{job.company_name}</p>
            <div className='mb-4'>
                <span className='mr-4 py-1 px-2 text-sm border-2 rounded border-emerald-100'>{job.remote_or_onsite}</span>
                <span className='mr-4 py-1 px-2 text-sm border-2 rounded border-emerald-100'>{job.fulltime_or_parttime}</span>
            </div>
            <div className='flex mb-6 text-slate-600'>
                <p><FontAwesomeIcon icon={faLocationDot} /><span className='ml-2'>{job.location}</span></p>
                <p className='ml-6'><FontAwesomeIcon icon={faDollarSign} /><span className='ml-2'>Salary: {job.salary}</span></p>
            </div>
            <button className='py-2 px-3 bg-blue-500 pt-2 pb-2 font-semibold text-white rounded-md'><Link to={`/view-details/${job.id}`} className=' '>View Details</Link></button>

        </div>
    );
};

export default FJob;