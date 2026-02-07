import React, { useState } from 'react';
import ScrollReveal from '@/features/user/components/ScrollReveal';

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: '🚀',
      title: 'Real-time Speed',
      description:
        'Experience latency-free communication with our optimized websocket infrastructure.',
      details: [
        'Sub-millisecond delivery times',
        'Global CDN distribution',
        'Instant state synchronization',
      ],
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description:
        'Your messages and data are protected with military-grade end-to-end encryption.',
      details: [
        'AES-256 encryption',
        'Zero-knowledge architecture',
        'GDPR & HIPAA compliant',
      ],
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: '🎨',
      title: 'Creative Canvas',
      description:
        'Share your ideas visually with integrated whiteboarding and asset sharing tools.',
      details: [
        'Interactive whiteboards',
        'Drag-and-drop file sharing',
        'Version control for assets',
      ],
      image:
        'https://images.unsplash.com/photo-1560419015-7c427e8 ae5ba?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: '🤖',
      title: 'AI Assisted',
      description:
        'Let our AI helpers manage your schedule, summarize threads, and draft responses.',
      details: [
        'Smart auto-reply',
        'Meeting summaries',
        'Context-aware search',
      ],
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section
      id='features'
      className='py-24 bg-transparent backdrop-blur-[2px] relative'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className='text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3'>
            Features
          </h2>
          <h3 className='text-3xl md:text-5xl font-bold text-white mb-6'>
            Everything you need to collaborate
          </h3>
        </div>

        {/* Tabs Navigation */}
        <div className='flex flex-wrap justify-center gap-4 mb-16'>
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              <span className='text-xl'>{feature.icon}</span>
              <span>{feature.title}</span>
            </button>
          ))}
        </div>

        {/* Active Content Display */}
        <div className='relative min-h-[500px]'>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-500 absolute top-0 left-0 w-full ${activeTab === index ? 'opacity-100 relative z-10 translate-y-0' : 'opacity-0 absolute -z-10 translate-y-4 pointer-events-none'}`}
            >
              <div className='bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row'>
                {/* Left Content: Text */}
                <div className='p-8 md:p-12 md:w-1/2 flex flex-col justify-center order-2 md:order-1'>
                  <div className='w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-4xl mb-6 text-blue-400'>
                    {feature.icon}
                  </div>
                  <h3 className='text-3xl font-bold text-white mb-4'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-300 text-lg leading-relaxed mb-8'>
                    {feature.description}
                  </p>
                  <ul className='space-y-4'>
                    {feature.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className='flex items-center text-gray-400'
                      >
                        <svg
                          className='w-5 h-5 text-green-400 mr-3 flex-shrink-0'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Content: Image */}
                <div className='md:w-1/2 h-64 md:h-auto relative order-1 md:order-2 overflow-hidden bg-gray-900'>
                  <div className='absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10'></div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 opacity-90'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
