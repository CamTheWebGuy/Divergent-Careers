import React from 'react';

import Image from 'next/image';

import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <div className='header bg-white flex items-center justify-between p-5'>
      <div className='w-56 h-14 relative m-auto'>
        <Image
          className='object-contain'
          layout='fill'
          src='/../public/logo.png'
        />
      </div>

      <div className='nav hidden md:block m-auto'>
        <ul className='flex mx-3'>
          <li className='mx-3'>
            <a href='/'>Find a Job</a>
          </li>
          <li className='mx-3'>
            <a href='/'>Company Reviews</a>
          </li>
          <li className='mx-3'>
            <a href='/'>Contact Us</a>
          </li>
        </ul>
      </div>

      <div className='controls hidden md:block m-auto'>
        <button className='bg-blue-600 px-6 py-1 text-white rounded-full'>
          Sign Up
        </button>
      </div>

      <div className='w-9 block md:hidden m-auto'>
        <Bars3Icon />
      </div>
    </div>
  );
};

export default Header;
