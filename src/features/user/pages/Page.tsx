import { ThemeToggle } from '@/components/ThemeToggle';

export const Page = ({ children }: React.PropsWithChildren) => {
  return <div className='px-4 py-8 md:p-4'>{children}</div>;
};

export const HeaderPage = () => {
  return (
    <div className='flex flex-col gap4 lg:flex-row lg:justify-between'>
      <h1 className='text-xl font-semibold lg:text-2xl'>
        Welcome back, Giap!!
      </h1>

      <div className='flex max-lg:hidden'>
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
};
