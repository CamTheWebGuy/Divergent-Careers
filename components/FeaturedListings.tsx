import React from 'react';
import Card from './Card';
import Button from './Button';

const FeaturedListings = () => {
  return (
    <div>
      <div className='listings grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-20 pt-10 bg-slate-50'>
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />
      </div>
      <div className='text-center'>
        <Button text='View All Jobs' />
      </div>
    </div>
  );
};

export default FeaturedListings;
