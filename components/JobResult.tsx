import React from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';

const JobResult = () => {
  return (
    <div className='hover:bg-slate-50 cursor-pointer bg-white p-5 drop-shadow rounded mt-3'>
      <div className='flex'>
        <div className='companyLogo mr-5 w-1/4'>
          <img
            src='https://www.edigitalagency.com.au/wp-content/uploads/TikTok-icon-glyph.png'
            alt='Company Logo'
          />
        </div>
        <div className='jobInfo w-9/12'>
          <h4 className='font-bold'>User Experience Designer</h4>
          <p className='font-light text-slate-500 flex'>
            <CurrencyDollarIcon className='h-5 w-5 text-blue-600 mr-1' />{' '}
            $45,000 - $65,000
          </p>
        </div>
      </div>
      <div className='job-badges flex flex-wrap'>
        <p className='bg-blue-300 text-blue-800 p-1 mt-3 text-sm rounded mr-2 px-3'>
          Full-Time
        </p>
        <p className='bg-violet-300 text-violet-800 p-1 text-sm rounded px-3 mt-3 mr-2'>
          Senior Level
        </p>
      </div>
    </div>
  );
};

export default JobResult;
