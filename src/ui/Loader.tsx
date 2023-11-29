import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
interface LoaderProps{
  isLoading:boolean
}
const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
     // Change this color to your desired value
  };

  return (
    <div className='sweet-loading w-full h-full fixed  flex items-center justify-center '>
      <ClipLoader
        color='#ffffff' // Initial color (you can change this dynamically)
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default Loader;
