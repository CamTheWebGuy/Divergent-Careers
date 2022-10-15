import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Banner from '../components/Banner';
import Header from '../components/Header';
import Multiselect from 'multiselect-react-dropdown';
import JobResult from '../components/JobResult';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import JobInformation from '../components/JobInformation';

const results: NextPage = () => {
  const [jobType, setJobType] = useState('Option 1');
  const jobTypeOptions = ['Full-Time', 'Part-Time', 'Contract'];
  return (
    <div>
      <Head>
        <title>Search Results | Divergent Careers</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Banner
        message='This app is still in development. If you have any questions, please
          reach out to me directly at: cameron@camthewebguy.com'
      />
      <Header />

      <div className='px-5 md:px-10 lg:px-20 grid grid-cols-12 gap-3 bg-slate-100 py-5 text-center'>
        <div className='col-span-12 drop-shadow'>
          <input
            className='p-2 1/5 hidden md:inline-block rounded'
            type='text'
            placeholder='Position'
          />
          <input
            className='p-2 w-1/5 lg:w-2/6 hidden md:inline-block'
            type='text'
            placeholder='Location'
          />

          {/* <div className='inline-block'>
            <Multiselect
              className='bg-white'
              showArrow
              options={jobTypeOptions}
              isObject={false}
              placeholder='Job Type'
              hidePlaceholder
              showCheckbox
            />
          </div> */}

          {/* <input className='p-2' type='text' placeholder='Job Type' /> */}
          {/* <input className='p-2 rounded' type='text' placeholder='Salary' /> */}
          <select
            name='salary'
            className='select-padding w-1/5 hidden md:inline-block'>
            <option value='30000'>$30,000+</option>
            <option value='40000'>$40,000+</option>
            <option value='50000'>$50,000+</option>
            <option value='60000'>$60,000+</option>
            <option value='70000'>$70,000+</option>
            <option value='80000'>$80,000+</option>
            <option value='90000'>$90,000+</option>
            <option value='100000'>$100,000+</option>
          </select>
          <button className='hover:bg-blue-800 mt-5 bg-blue-600 px-6 py-2 text-white rounded-r-lg hidden md:inline-block'>
            Find Jobs
          </button>
        </div>
      </div>

      <div className='px-5 md:px-10 lg:px-20 grid grid-cols-12 gap-3 bg-slate-100 py-5'>
        <div className='col-span-12 block sm:hidden'>
          <div className='mobile-filters text-center'>
            <button className='bg-blue-600 px-6 py-1 text-white rounded-full w-full'>
              Filter Jobs
            </button>
          </div>
        </div>

        <Sidebar />

        <div className='job-results col-span-12 sm:col-span-9 md:col-span-4'>
          <JobResult />
          <JobResult />
          <JobResult />
          <JobResult />
          <JobResult />
        </div>

        <JobInformation />
      </div>

      <Footer />
    </div>
  );
};

export default results;
