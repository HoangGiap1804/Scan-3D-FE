import PageTitle from '@/components/PageTitle';

const UserDashboard = () => {
  return (
    <>
      <PageTitle title='Dashboard' />
      <div className='px-4 py-8 md:p-4'>
        <h1 className='text-2xl font-bold mb-4'>Welcome Home</h1>
        <p>Select an item from the sidebar to view details.</p>
      </div>
    </>
  );
};

export default UserDashboard;
