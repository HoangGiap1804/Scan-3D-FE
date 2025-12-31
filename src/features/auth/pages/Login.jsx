import { Link, Form } from 'react-router-dom';
import PageTitle from '@/components/PageTitle';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import Hero3D from '@/components/landing/Hero3D';

import { banner, iconDark, iconLight } from '@/assets/assets';


import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '@/features/auth/services/auth';
import { hasRole } from '@/features/auth/utils/authUtils';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      await login(username, password);

      if (hasRole('ADMIN_REALM')) {
        navigate('/admin');
      } else {
        navigate('/profile');
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  return (
    <>
      <PageTitle title='Login' />
      <div
        className='
    relative
    w-full
    h-screen
    p-2
    grid
    grid-cols-1
    md:grid-cols-2
    md:gap-2
    overflow-hidden
  '
      >
        <div className='flex flex-col p-4 h-full'>
          <Link
            to='/'
            className='max-w-max mx-auto lg:mx-0'
          >
            <img
              src={iconLight}
              alt='Logo'
              width={133}
              height={24}
              className='dark:hidden'
            />
            <img
              src={iconDark}
              alt='Logo'
              width={133}
              height={24}
              className='hidden dark:block'
            />
          </Link>
          <div className='flex-1 flex flex-col justify-center'>
            <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
              <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
                LOGIN
              </h2>
              <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
                Login today and gain access to powerful tools that will
                supercharge your ideas.
              </p>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <Form
                method='POST'
                className='grid grid-cols-1 gap-4'
                onSubmit={handleLogin}
              >

                <TextField
                  type='text'
                  name='username'
                  label='Username or Email'
                  placeholder='Enter your username or email'
                  required={true}
                />

                <TextField
                  type='password'
                  name='password'
                  label='Password'
                  placeholder='Enter your Password'
                  required={true}
                />

                <Button type='submit'>Login</Button>
              </Form>
            </div>

            <p className='text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center mt-4'>
              Don't have an account?
              <Link
                to='/register'
                className='link inline-block ms-1 text-light-onSurface dark:text-dark-onSurface'
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className='hidden img-box lg:block lg:relative lg:rounded-large overflow-hidden bg-gray-900'>
          <Hero3D />
          <div className="absolute bottom-12 left-0 w-full text-center z-10 pointer-events-none px-6">
            <p className='text-white text-3xl font-bold leading-tight drop-shadow-lg'>
              Chat with Chat Box to <br />
              <span className="text-blue-400">supercharge</span> your ideas
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
