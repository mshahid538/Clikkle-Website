import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export type BrandProps = {
  //
};

const Brand: React.FC<BrandProps> = () => {
  return (
    <div className='flex items-center flex-grow gap-3 pl-4'>
      <Link to={"https://clikkle.com"}>
      <img
        className='w-[35px] h-[35px] sm:w-[35px] sm:h-[35px]'
        src='https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle.png'
        />
        </Link>
        <Link to={"https://clikkle.com"}>
      <Typography className='text-black dark:text-white text-base sm:text-lg md:text-xl sm:text-xs' variant='h5'
        style={{ font: 'bold',}}
      >
        Clikkle
      </Typography>
        </Link>
        
    </div>
  );
};

export default Brand;
