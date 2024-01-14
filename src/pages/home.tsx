import React from 'react';
import {
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Facebook,
  QuestionMarkRounded,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import HomeFeature, { features } from '../components/homeFeature';
import { appList } from '../components/appList';


const Home: React.FC = () => {
  return (
    <div className='px-2 py-8 sm:px-6 sm:py-6'>
      <div className='flex flex-col sm:flex-row mt-0 sm:items-center justify-center sm:justify-start h-[calc(68vh-65px)] ml-2 gap-10'>
        <div className='max-w-[600px] px-4 sm:px-8 pb-12 sm:mr-10 gap-6 text-center text-sm'>
          <Typography
            variant='h2'
            className='hidden sm:flex text-center sm:text-left text-gray-800 dark:text-gray-300 font-light'
          >
            A Fully Featured Business Stack Solution
          </Typography>

          <Typography
            variant='h4'
            className='sm:hidden text-center sm:text-left text-gray-800 dark:text-gray-300 font-normal sm:mt-0'
          >
            A Fully Featured Business Stack Solution
          </Typography>

          <br />

          <Typography
            className='hidden sm:flex text-center sm:text-left text-gray-800 dark:text-gray-300 font-light'
            style={{ fontSize: '1.1rem' }}
          >
            Unlock the AI-driven efficiency and innovation within your organization with our fully featured business stack solution. Your Success, Powered with AI.
          </Typography>
          <Typography
            className='sm:hidden text-center sm:text-left text-gray-800 dark:text-gray-300 font-normal sm:mt-0'
            style={{ fontSize: '0.8rem' }}
          >
            Unlock the AI-driven efficiency and innovation within your organization with our fully featured business stack solution. Your Success, Powered with AI.
          </Typography>

          <br />

          <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-2'>
            <TextField
              size='small'
              placeholder='Enter email'
              className='w-full sm:w-auto sm:mb-0 sm:pl-2'
              style={{ marginTop: 12 }}
            />
            <Button
              size='large' 
              variant='contained'
              className='-mt-12 w-full sm:w-auto sm:mb-0 sm:pl-2'
              
            >
              <Link to={"https://clikkle.com/user"}>
                Get Started
              </Link>
            </Button>
          </div>

          <div className='flex flex-col sm:flex-row items-center sm:justify-start sm:gap-0 mt-6'>
            <p className='dark:text-white sm:mr-2 text-sm'>
              Don't have an account?
            </p>
            <Link
              to={"https://apps.clikkle.com"}
              className='flex-grow sm:flex-grow-0 text-blue-500 text-sm'
            >
              Sign up at no cost
            </Link>
          </div>
        </div>
        <div className='hidden sm:flex items-center justify-center mt-4 pt-16 ml-16 '>
        <img
          src='/illustrations/banner.png'
          className='w-full h-[calc(68vh-140px)] object-cover object-center'
          alt='Banner'
          style={{ display: 'none' }}
        />
        </div>
        

        <div className='hidden sm:flex items-center justify-center mt-6 pt-16 ml-16 '>
        <img
          src='/illustrations/banner.png'
          className='w-full h-[calc(97vh-140px)] object-cover object-center'
          alt='Banner'
        />
        </div>
      </div>

      <br />

      <div className=''>
        {features.map((feature, index) => (
          <HomeFeature
            {...{ feature, left: index % 2 === 0, key: feature.name }}
          />
        ))}
      </div>

      <div className='h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-10 mt-12 pt-10'>
        <Typography
          variant='h4'
          className='text-center sm:text-left text-gray-800 dark:text-gray-300 text-2xl'
        >
          Discover the perfect app for you
        </Typography>

        <div className='flex gap-8 items-center justify-center flex-wrap max-w-[1000px]'>
          {appList.map((app) => (
            <div
              key={app.name}
              className='flex flex-col items-center justify-center gap-2'
            >
              <Link to={app.link}>
              <img
              src={app.logo}
              alt={app.name}
              className='w-[20px] h-[20px]'
            />
            </Link>
            <Link to={app.link}>
              <Typography className='text-xs'>{app.name}</Typography>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-8 mt-10 pt-10'>
        <Typography
          variant='h4'
          className='text-center sm:text-left text-gray-800 dark:text-gray-300 text-2xl'
        >
          Perfect Solution for Businesses
        </Typography>

        <br />

        <img
          src='https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle.png'
          className='h-[80px] w-[80px]'
        />      

        <br />

        <div className='max-w-[600px] flex flex-col items-center justify-center'>
          <Typography className='text-center'>
            Clikkle specializes in providing a wide range of AI-powered solutions tailored for life & businesses, including cloud storage, email hosting, and much more
          </Typography>

          <br />

          <Link to={"https://clikkle.com/learnmore"} className='text-blue-400 font-bold'>
            Learn more about Clikkle
          </Link>
        </div>
      </div>

      <div className='h-[calc(100vh-65px)] flex flex-col'>
        <div className='flex flex-col items-center justify-center gap-8 flex-grow'>
          <Typography
            variant='h4'
            className='text-center sm:text-left text-gray-800 dark:text-gray-300 text-2xl'
          >
            Ready to get Started?
          </Typography>

          <div className='flex gap-4 items-center justify-center'>
            <Button variant='contained' size='small'>
              <Link to={"https://clikkle.com/tryclikkleplus"}>
                Try Clikkle Plus
              </Link>
            </Button>
            <Button variant='outlined' size='small'>
              <Link to={"https://clikkle.com/gotoplus"}>
                Go to Plus
              </Link>
            </Button>
          </div>
        </div>

        <div className='flex items-center gap-4 p-4'>
          <Typography className='text-gray-700 dark:text-gray-200'>
              Follow our blog
          </Typography>
          <IconButton>
            <YouTube />
          </IconButton>

          <IconButton>
            <Twitter />
          </IconButton>

          <IconButton>
            <Facebook />
          </IconButton>
        </div>
      </div>

      <Divider />

      <div className='py-4 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 p-4'>
        <div className='flex items-center gap-2 sm:gap-4'>
          <Link to={"https://clikkle.com"}>
          <Typography className='text-gray-600 dark:text-gray-300'>
            Clikkle
          </Typography>
          </Link>
          <Link to={"https://clikkle.com/about"}>
          <Typography className='text-gray-600 dark:text-gray-300'>
            About
          </Typography>
          </Link>
          <Link to={"https://clikkle.com/products"}>
          <Typography className='text-gray-600 dark:text-gray-300'>
            Products
          </Typography>
          </Link>
          <Link to={"https://careers.clikkle.com"}>
          <Typography className='text-gray-600 dark:text-gray-300'>
            Careers
          </Typography>
          </Link>
          <Link to={"https://clikkle.com/privacy"}>
          <Typography className='text-gray-600 dark:text-gray-300'>
            Privacy
          </Typography>
          </Link>
          <Link to={"https://clikkle.com/terms"}>
          <Typography className='text-gray-600 dark:text-gray-300'>
            Terms
          </Typography>
          </Link>
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>
          <IconButton>
            <QuestionMarkRounded className='text-gray-600 dark:text-gray-300' />
          </IconButton>

          <Typography className='text-gray-600 dark:text-gray-300'>
            Help
          </Typography>
          <div className='border-gray-300 dark:border-gray-600 border-[1px] rounded-md px-6 py-[6px]'>
            <Typography className='text-gray-600 dark:text-gray-300'>
              English
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
