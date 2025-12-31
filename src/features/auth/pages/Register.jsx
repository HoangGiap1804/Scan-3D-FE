import { Link } from 'react-router-dom';
import PageTitle from '@/components/PageTitle';
import Button from '@/components/Button';
import keycloak from '../services/keycloak';

import { banner, iconDark, iconLight } from '@/assets/assets';
import Hero3D from '@/components/landing/Hero3D';

const Register = () => {


  return (
    <>
      <PageTitle title='Create an account' />
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
                Create an account
              </h2>
              <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
                Register today and gain access to powerful tools that will
                supercharge your ideas.
              </p>

              <div className='grid grid-cols-1 gap-4'>
                <p className="text-center text-gray-500 mb-4">
                  You will be redirected to our secure identity provider to complete your registration.
                </p>
                <Button onClick={() => keycloak.register()}>
                  Register with Keycloak
                </Button>
              </div>
            </div>

            <p className='text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center mt-4'>
              Already have an account?
              <Link
                to='/login'
                className='link inline-block ms-1 text-light-onSurface dark:text-dark-onSurface'
              >
                Sign in
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
      </div >
    </>
  );
};

export default Register;
