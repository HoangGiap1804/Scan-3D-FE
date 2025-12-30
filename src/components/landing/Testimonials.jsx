import React from 'react';

const Testimonials = () => {
    return (
        <section className='py-24 bg-transparent overflow-hidden'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>Loved by thousands of users</h2>
                    <p className='text-xl text-gray-300 max-w-2xl mx-auto'>Don't just take our word for it. Here's what our community has to say about ChatBox.</p>
                </div>

                <div className='grid md:grid-cols-3 gap-8'>
                    {/* Testimonial 1 */}
                    <div className='bg-white/5 backdrop-blur-md p-8 rounded-2xl relative border border-white/10 hover:bg-white/10 transition-colors'>
                        <div className='text-4xl text-blue-400 absolute top-4 left-6 opacity-50'>&ldquo;</div>
                        <p className='text-gray-300 italic mb-6 relative z-10'>
                            "ChatBox has completely transformed how our remote team communicates. The video quality is improved, and the file sharing is seamless."
                        </p>
                        <div className='flex items-center'>
                            <img src='https://picsum.photos/seed/user1/100/100' alt='User 1' className='w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-white/10' />
                            <div>
                                <h4 className='font-bold text-white'>Sarah Johnson</h4>
                                <p className='text-sm text-gray-400'>Product Manager @ TechFlow</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className='bg-white/5 backdrop-blur-md p-8 rounded-2xl relative mt-0 md:-mt-4 shadow-xl border border-white/10 hover:bg-white/10 transition-colors'>
                        <div className='text-4xl text-blue-400 absolute top-4 left-6 opacity-50'>&ldquo;</div>
                        <p className='text-gray-300 italic mb-6 relative z-10'>
                            "The best chat application I've used in years. Simple, fast, and the AI integration is a game-changer for my daily workflow."
                        </p>
                        <div className='flex items-center'>
                            <img src='https://picsum.photos/seed/user2/100/100' alt='User 2' className='w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-white/10' />
                            <div>
                                <h4 className='font-bold text-white'>David Chen</h4>
                                <p className='text-sm text-gray-400'>Senior Developer @ CodeCraft</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className='bg-white/5 backdrop-blur-md p-8 rounded-2xl relative border border-white/10 hover:bg-white/10 transition-colors'>
                        <div className='text-4xl text-blue-400 absolute top-4 left-6 opacity-50'>&ldquo;</div>
                        <p className='text-gray-300 italic mb-6 relative z-10'>
                            "Finally, a chat app that doesn't feel cluttered. The design is beautiful and the performance is top-notch."
                        </p>
                        <div className='flex items-center'>
                            <img src='https://picsum.photos/seed/user3/100/100' alt='User 3' className='w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-white/10' />
                            <div>
                                <h4 className='font-bold text-white'>Emily Davis</h4>
                                <p className='text-sm text-gray-400'>Designer @ Circle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
