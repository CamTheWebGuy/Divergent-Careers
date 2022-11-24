import React from 'react';
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/solid';
const JobResult = () => {
  return (
    <div className='jobCard p-5 rounded border border-slate-200 mb-3 cursor-pointer'>
      <div className='jobTitle flex justify-between'>
        <h2 className='font-bold text-2xl'>Techical Support Specialist</h2>
        <span className='text-xl font-bold'>$40/hr</span>
      </div>
      <div className='jobDetails text-slate-500 font-light'>
        <span className='font-bold text-blue-600'>Netflix</span>{' '}
        <div className='w-3 inline-block'>
          <MapPinIcon />
        </div>{' '}
        Remote{' '}
        <div className='w-3 inline-block'>
          <BriefcaseIcon />
        </div>{' '}
        Full-Time
      </div>
      <p className='pt-3 text-slate-500 font-light'>
        We want someone who has been doing this for a solid 2-3 years. We want
        someone who can demonstrate an extremely strong portfolio. Create
        deliverables for your product area (for example competitive analyses,
        user flows.
      </p>
      <div className='jobBadges mt-3'>
        <ul>
          <li className='inline-block bg-purple-300 rounded p-1 text-sm '>
            Full-Time
          </li>
          <li className='inline-block bg-green-300 rounded p-1 text-sm ml-2'>
            Urgent
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobResult;
