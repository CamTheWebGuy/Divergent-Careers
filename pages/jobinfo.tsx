import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Image from 'next/image';

const jobinfo: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Job Information | Divergent Careers</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='jobInfoHero px-5 md:px-10 lg:px-20 py-5 bg-orange-100'>
        <h2 className='text-4xl font-bold'>Techical Support Specialist</h2>
        <p>Home / Results</p>
      </div>

      <div className='jobInfoContent px-5 md:px-10 lg:px-20 grid grid-cols-12 gap-3 bg-slate-100 py-5'>
        <div className='col-span-9'>
          <img
            className='h-60 w-full'
            src='https://nbcpalmsprings.com/wp-content/uploads/sites/8/2022/07/Yy247gYvzaMZXprhZHXy4E.jpg'
            alt=''
          />
          <div className='jobContent'>
            <h3 className='font-bold text-xl my-2'>The Netflix Team</h3>
            <p>
              The AliStudio Design team has a vision to establish a trusted
              platform that enables productive and healthy enterprises in a
              world of digital and remote everything, constantly changing work
              patterns and norms, and the need for organizational resiliency.
            </p>
            <br />
            <p>
              The ideal candidate will have strong creative skills and a
              portfolio of work which demonstrates their passion for
              illustrative design and typography. This candidate will have
              experiences in working with numerous different design platforms
              such as digital and print forms.
            </p>
          </div>
        </div>
        <div className='col-span-3'>SIDEBAR</div>
      </div>

      <Footer />
    </div>
  );
};

export default jobinfo;
