import {
  ClockIcon,
  CurrencyDollarIcon,
  MapIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';
import React from 'react';

const Card = () => {
  return (
    <div className='card bg-white drop-shadow p-10 rounded cursor-pointer hover:bg-slate-50'>
      <div className='text-center w-3/6 bg-blue-300 text-blue-600 px-2 rounded-full text-sm'>
        <h3>Full-Time</h3>
      </div>

      <h2 className='text-2xl font-medium pt-2'>Senior Frontend Engineer</h2>
      <p className='font-light pt-3'>
        Collaborate with backend developers to improve usability.
      </p>
      <div className='badges flex mt-6 place-content-between'>
        <div className='posted flex'>
          <ClockIcon className='h-5 w-5 text-blue-600 mr-1' />
          <span className='text-slate-400 text-sm font-light'>
            11 Hours Ago
          </span>
        </div>
        <div className='salary flex'>
          {' '}
          <CurrencyDollarIcon className='h-5 w-5 text-blue-600 mr-1' />
          <span className='text-slate-400 text-sm font-light'>$20,0000</span>
        </div>
      </div>

      <div className='company flex mt-8'>
        <div className='company-logo w-1/6'>
          <img
            src='https://www.edigitalagency.com.au/wp-content/uploads/TikTok-icon-glyph.png'
            alt='Company Logo'
          />
        </div>
        <div className='job-details w-5/6 pl-5'>
          <p className='font-bold mb-1 text-slate-600'>Tiktok</p>
          <p className='flex text-slate-400'>
            <MapPinIcon className='h-5 w-5 text-slate-400 mr-1' />
            London, UK
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
