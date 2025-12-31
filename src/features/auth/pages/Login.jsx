import { Link, Form } from 'react-router-dom';
import PageTitle from '@/components/PageTitle';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import Hero3D from '@/components/landing/Hero3D';
import keycloak from '@/features/auth/services/keycloak';

import { banner, iconDark, iconLight } from '@/assets/assets';


import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { login } from '@/features/auth/services/auth';
import { hasRole } from '@/features/auth/utils/authUtils';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    if (keycloak.authenticated) {
      navigate('/profile');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      await login(username, password);

      navigate('/profile');
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

              <div className="relative my-4 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                </div>
                <span className="relative bg-white dark:bg-gray-900 px-4 text-sm text-gray-500">
                  Or continue with
                </span>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => keycloak.login({ idpHint: 'google' })}
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow hover:scale-110 active:scale-95 duration-200"
                  title="Sign in with Google"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21-1.19-2.95z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </button>
              </div>
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
