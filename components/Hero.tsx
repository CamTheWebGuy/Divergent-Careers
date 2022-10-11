import React from 'react';
import dynamic from 'next/dynamic';

const ParticlesBg = dynamic(() => import('particles-bg'), {
  ssr: false,
});

const Hero = () => {
  return (
    <div className='py-20'>
      <ParticlesBg type='cobweb' color='#2463eb' bg={true} />
      <h1 className='py-3 text-center text-slate-700 text-4xl font-bold'>
        The Job Board For Neurodivergents!
      </h1>
      <p className='text-center text-slate-500 px-20'>
        Divergent Careers workforce inclusion platform empowers employers with
        accommodations insights, access, training, and support they need to
        attract and retain previously untapped talent.
      </p>
      <div className='text-center pt-10'>
        <button className='bg-blue-600 px-6 py-2 text-white rounded-full'>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
