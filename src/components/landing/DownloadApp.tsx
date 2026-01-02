import React from 'react';

const DownloadApp = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Get the App
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Experience the full power of collaboration on the go. Scan to download for your device.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* iOS Card */}
                    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl shadow-blue-500/5">
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">App Store</h3>
                            <p className="text-gray-400 mb-8">For iPhone & iPad</p>

                            <div className="bg-white p-4 rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                                {/* Placeholder QR Code for iOS */}
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://apps.apple.com"
                                    alt="iOS App Store QR Code"
                                    className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Android Card */}
                    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl shadow-green-500/5">
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Google Play</h3>
                            <p className="text-gray-400 mb-8">For Android Devices</p>

                            <div className="bg-white p-4 rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                                {/* Placeholder QR Code for Android */}
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com"
                                    alt="Google Play QR Code"
                                    className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
