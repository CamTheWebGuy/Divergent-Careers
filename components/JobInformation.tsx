import React from 'react';

const JobInformation = () => {
  return (
    <div className='job-information col-span-5 bg-white mt-3 rounded drop-shadow hidden md:block'>
      <div className='rounded'>
        <img
          src='https://images.unsplash.com/photo-1642141325625-f76034e4ad2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
          alt=''
          className='rounded h-44 w-full'
        />
      </div>
      <div className='job-content p-5'>
        <h2 className='font-bold text-xl'>User Experience Designer</h2>
        <div className='flex'>
          <p className='mr-2 font-bold text-blue-500'>Tiktok</p>
          <p className='font-light text-slate-400'>Remote</p>
          <p className='text-xs font-light mt-1 ml-16 text-slate-400'>
            <span className='mr-1'>Posted 8 Days Ago</span>{' '}
            <span className='font-bold'>9 Applicants</span>
          </p>
        </div>

        <div className='job-detail mt-2 flex justify-between border p-2 bg-slate-100 rounded text-center'>
          <div>
            <h4 className='text-xs font-bold'>Experience:</h4>
            <span className='text-sm'>No Experience</span>
          </div>
          <div>
            <h4 className='text-xs font-bold'>Skill Level:</h4>
            <span className='text-sm'>Senior Level</span>
          </div>
          <div>
            <h4 className='text-xs font-bold'>Job Type:</h4>
            <span className='text-sm'>Full-Time</span>
          </div>
          <div>
            <h4 className='text-xs font-bold'>Salary:</h4>
            <span className='text-sm'>$65,000/yr</span>
          </div>
        </div>

        <h3 className='font-bold mt-3'>Overview</h3>
        <p className='font-light'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, modi
          earum quibusdam quaerat quidem hic est voluptatem a ea deleniti
          nostrum maiores numquam corrupti alias excepturi unde minus?
          Perferendis, illo?
        </p>

        <h3 className='font-bold mt-3'>Job Description</h3>
        <p className='font-light'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, modi
          earum quibusdam quaerat quidem hic est voluptatem a ea deleniti
          nostrum maiores numquam corrupti alias excepturi unde minus?
          Perferendis, illo?
        </p>
      </div>
    </div>
  );
};

export default JobInformation;
