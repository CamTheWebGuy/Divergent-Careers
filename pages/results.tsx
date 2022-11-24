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

import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/solid';

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

      <div className='resultsHero bg-orange-100 px-5 md:px-10 lg:px-20 py-9 text-center'>
        <h2 className='font-bold text-3xl'>
          There Are 65,866 Jobs Here For you!
        </h2>
        <p>Discover your next career move, freelance gig, or internship</p>
        <div className='searchBar text-center flex justify-center mt-3 hidden sm:flex'>
          <input
            className='p-2 rounded w-full'
            type='text'
            placeholder='UI Designer'
          />
          <select className='p-2 w-full' name='jobType' id='jobType'>
            <option value='fullTime'>Full-Time</option>
            <option value='partTime'>Part-Time</option>
            <option value='contract'>Contract</option>
          </select>
          <input className='p-2 w-full' type='text' placeholder='Remote' />
          <select className='p-2 rounded w-full' name='salary' id='salary'>
            <option value='2040'>$20,0000 - $40,000</option>
            <option value='4160'>$41,0000 - $60,0000</option>
            <option value='6180'>$61,0000 - $80,0000</option>
            <option value='6180'>$81,0000+</option>
          </select>
          <button className='ml-3 bg-blue-600 px-6 py-1 text-white rounded-full'>
            Search
          </button>
        </div>
        <div className='flex justify-center'>
          <button className='mt-3 bg-blue-600 px-6 py-1 text-white rounded-full block sm:hidden'>
            Filter Results
          </button>
        </div>
      </div>

      <div className='px-5 md:px-10 lg:px-20 grid grid-cols-12 gap-3 bg-slate-100 py-5'>
        <div className='col-span-3'>
          <Sidebar />
        </div>

        <div className='sm:col-span-9 col-span-12'>
          <JobResult />
          <JobResult />
          <JobResult />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default results;
