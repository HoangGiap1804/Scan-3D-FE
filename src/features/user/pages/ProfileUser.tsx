import PageTitle from '@/components/PageTitle';
import { useUserQuery } from '../queries/user.query';

const ProfileUser = () => {
  const { data: user, isLoading: loading, error, refetch } = useUserQuery();

  if (loading) return <div>Loading</div>;
  if (error) return <div>ERROR</div>;

  return (
    <>
      <PageTitle title='Profile' />
      <div className='bg-white p-6 rounded-lg shadow-sm w-full max-w-2xl mx-auto mt-10 text-gray-800'>
        <div className='flex items-center space-x-6'>
          <div className='shrink-0'>
            <img
              className='h-24 w-24 object-cover rounded-full border-2 border-gray-200'
              src={'https://github.com/shadcn.png'}
              alt='Avatar'
            />
            <div>{user?.id}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
