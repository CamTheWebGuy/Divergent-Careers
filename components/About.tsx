import React from 'react';
import Image from 'next/image';
import Button from './Button';

const About = () => {
  return (
    <div className='about-us flex px-7 py-10 bg-slate-50 flex-wrap md:flex-nowrap md:px-20'>
      <div className='about-content md:mr-10 w-full md:w-1/2'>
        <h2 className='font-bold text-3xl'>
          Personalized Workplace Accommodations
        </h2>
        <p className='pt-5 text-md leading-loose text-slate-500 font-light'>
          Divergent Careers fosters transparency by putting accommodations up
          front. Create a Candidate Profile and add the accommodations you need
          to be successful on the job such as remote work, access to apps for
          stress/anxiety, screen reading software, a service animal, accessible
          parking, braille signage, and dozens more.
        </p>
        <Button text='Get Started' />
      </div>
      <div className='about-img relative w-full mt-10 md:w-1/2 md:mt-0'>
        <Image
          height='60'
          width='100%'
          layout='responsive'
          src={
            'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1848&q=80'
          }
        />
      </div>
    </div>
  );
};

export default About;
