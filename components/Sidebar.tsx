import React from 'react';

const Sidebar = () => {
  return (
    <div className='filters-menu col-span-3 hidden sm:block'>
      <div className='card bg-blue-100 p-5 rounded'>
        <h3 className='text-lg font-medium'>Set Job Reminder</h3>
        <p className='pt-2 font-light'>
          Enter you email address and get job notification.
        </p>
        <form className='pt-2'>
          <input
            className='rounded p-2 w-full'
            type='text'
            placeholder='email@example.com'
          />
          <button className='mt-3 bg-blue-600 px-6 py-1 text-white rounded-full'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
