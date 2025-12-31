import React from 'react';
import Hero3D from './Hero3D';

const Hero = () => {
    return (
        <section className='relative min-h-[800px] flex items-center overflow-hidden bg-gray-900'>


            {/* 3D Background */}
            <Hero3D />

            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent z-0 pointer-events-none"></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full'>
                <div className='max-w-3xl'>
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-6 animate-fade-in-up border border-blue-500/20 backdrop-blur-sm'>
                        <span className='w-2 h-2 rounded-full bg-blue-400 mr-2'></span>
                        Now with AI Integrations
                    </div>

                    <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight animate-fade-in-up delay-100 relative'>
                        Scan <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>3D</span>

                        {/* Decorative floating card */}
                        <div className='absolute -right-80 top-10 w-64 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-2xl animate-float hidden lg:block'>
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/20">
                                    SJ
                                </div>
                                <div className="flex-1">
                                    <div className="h-2 w-20 bg-white/40 rounded mb-1.5"></div>
                                    <div className="h-1.5 w-12 bg-white/20 rounded"></div>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-white/10 rounded"></div>
                                <div className="h-2 w-5/6 bg-white/10 rounded"></div>
                            </div>
                        </div>
                        {/* Decorative floating card */}
                        <div className='absolute -right-90 top-50 w-64 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-2xl animate-float hidden lg:block'>
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/20">
                                    SF
                                </div>
                                <div className="flex-1">
                                    <div className="h-2 w-20 bg-white/40 rounded mb-1.5"></div>
                                    <div className="h-1.5 w-12 bg-white/20 rounded"></div>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-white/10 rounded"></div>
                                <div className="h-2 w-5/6 bg-white/10 rounded"></div>
                            </div>
                        </div>

                        {/* Background glow for the card */}
                        {/* <div className='absolute -right-40 -top-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl animate-pulse hidden lg:block -z-10'></div> */}
                    </h1>

                    <p className='text-xl text-gray-300 mb-10 leading-relaxed animate-fade-in-up delay-200'>
                        Seamless communication for modern teams. Share files, chat in real-time, and boost productivity with our all-in-one platform.
                    </p>

                    <div className='flex flex-col sm:flex-row items-center justify-start gap-4 animate-fade-in-up delay-300'>
                        <button className='w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:shadow-blue-500/30 hover:bg-blue-700 transition-all transform hover:-translate-y-1'>
                            Start for Free
                        </button>
                        <button className='w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 backdrop-blur-sm transition-all'>
                            View Demo
                        </button>
                    </div>

                    <div className='mt-10 flex items-center justify-start space-x-6 text-gray-400 animate-fade-in-up delay-400'>
                        <span>Trusted by 5000+ teams</span>
                    </div>
                </div>
            </div>

            {/* Fade gradient at the bottom to smooth transition */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10 pointer-events-none"></div>
        </section>
    );
};

export default Hero;
