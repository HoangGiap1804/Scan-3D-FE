import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-white backdrop-blur-md sticky top-0 z-50 border-b border-gray-100'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                    <div className='flex items-center'>
                        <a href='/' className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600'>
                            Scan 3D
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <a href='#features' className='text-gray-600 hover:text-blue-600 transition-colors'>Features</a>
                        <a href='#pricing' className='text-gray-600 hover:text-blue-600 transition-colors'>Pricing</a>
                        <a href='#about' className='text-gray-600 hover:text-blue-600 transition-colors'>About</a>
                        <Link to='/login' className='text-gray-600 hover:text-blue-600 font-medium transition-colors'>
                            Login
                        </Link>
                        <Link to='/register' className='bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden flex items-center'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-gray-600 hover:text-gray-900 focus:outline-none'
                        >
                            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                {isOpen ? (
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                ) : (
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden bg-white border-b border-gray-100 animate-fade-in-down container mx-auto'>
                    <div className='px-4 pt-2 pb-4 space-y-2'>
                        <a href='#features' className='block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors'>Features</a>
                        <a href='#pricing' className='block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors'>Pricing</a>
                        <a href='#about' className='block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors'>About</a>
                        <div className='pt-4 flex flex-col space-y-3'>
                            <button className='w-full text-center text-gray-600 font-medium py-2 hover:bg-gray-50 rounded-md transition-colors'>
                                Login
                            </button>
                            <button className='w-full bg-blue-600 text-white py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-transform active:scale-95'>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
