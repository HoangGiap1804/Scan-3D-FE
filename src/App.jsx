import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/landing/Hero';
import Hero3D from './components/landing/Hero3D';
import Features from './components/landing/Features';
import DownloadApp from './components/landing/DownloadApp';
import Testimonials from './components/landing/Testimonials';

function App() {
  return (
    <div className='relative min-h-screen bg-gray-900 text-white overflow-x-hidden'>
      {/* Global 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Hero3D />
        {/* Global Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-950/95"></div>
      </div>

      <div className="relative z-10 font-sans">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <DownloadApp />
          <Testimonials />
          {/* Simple CTA Section before footer */}
          <section className='py-20 bg-blue-600/20 backdrop-blur-md border-y border-white/10 text-white text-center px-6'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>Ready to transform your communication?</h2>
            <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>Join thousands of teams who trust ChatBox for their daily collaboration.</p>
            {/* <button className='bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
              Get Started Now
            </button> */}
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
