import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Banner from '../components/Banner';
import Header from '../components/Header';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import JobResult from '../components/JobResult';
import Footer from '../components/Footer';

const results: NextPage = () => {
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

      <div className='px-5 md:px-10 lg:px-20 grid grid-cols-12 gap-3 bg-slate-100 py-5 md:py-10'>
        <div className='col-span-12 block sm:hidden'>
          <div className='mobile-filters text-center'>
            <button className='bg-blue-600 px-6 py-1 text-white rounded-full'>
              Filter Jobs
            </button>
          </div>
        </div>
        <div className='filters-menu col-span-3 hidden sm:block'>
          <div className='job-type mt-3'>
            <h3 className='font-bold'>Job Type:</h3>
            <div>
              <label>
                <input type='checkbox' name='fulltime' id='' /> Full-Time
              </label>
            </div>
            <div>
              <label>
                <input type='checkbox' name='parttime' id='' /> Part-Time
              </label>
            </div>
            <div>
              {' '}
              <label>
                <input type='checkbox' name='contract' id='' /> Contract
              </label>
            </div>

            <div className='job-location mt-2'>
              <h3 className='font-bold'>Job Location:</h3>
              <div>
                <label>
                  <input type='checkbox' name='fulltime' id='' /> On-Site
                </label>
              </div>
              <div>
                <label>
                  <input type='checkbox' name='fulltime' id='' /> Remote
                </label>
              </div>
              <div>
                <label>
                  <input type='checkbox' name='fulltime' id='' /> Hybrid
                </label>
              </div>
            </div>
            <div className='job-skill mt-2'>
              <h3 className='font-bold'>Skill Level:</h3>
              <div>
                <label>
                  <input type='checkbox' name='noExperience' id='' /> No
                  Experience Required
                </label>
              </div>
              <div>
                <label>
                  <input type='checkbox' name='entry' id='' /> Entry Level
                </label>
              </div>
              <div>
                <label>
                  <input type='checkbox' name='midlevel' id='' /> Mid Level
                </label>
              </div>

              <div>
                <label>
                  <input type='checkbox' name='senior' id='' /> Senior Level
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='job-results col-span-12 sm:col-span-9 md:col-span-4'>
          <JobResult />
          <JobResult />
          <JobResult />
          <JobResult />
          <JobResult />
        </div>

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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
              modi earum quibusdam quaerat quidem hic est voluptatem a ea
              deleniti nostrum maiores numquam corrupti alias excepturi unde
              minus? Perferendis, illo?
            </p>

            <h3 className='font-bold mt-3'>Job Description</h3>
            <p className='font-light'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
              modi earum quibusdam quaerat quidem hic est voluptatem a ea
              deleniti nostrum maiores numquam corrupti alias excepturi unde
              minus? Perferendis, illo?
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default results;
