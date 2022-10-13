import React from 'react';

const Button = ({ text }: { text: string }) => {
  return (
    <button className='hover:bg-blue-800 mt-5 bg-blue-600 px-6 py-2 text-white rounded-full'>
      {text}
    </button>
  );
};

export default Button;
