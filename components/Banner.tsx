import React from 'react';

const Banner = ({ message }: { message: string }) => {
  return (
    <div className='banner text-center bg-blue-600 text-white p-3 text-sm'>
      <p>{message}</p>
    </div>
  );
};

export default Banner;
