import React from 'react';

export default function ContactCard() {
    return (
        <div className="w-full h-1/2 lg:h-full mt-[-70px] sm:mt-0 relative z-50 afacad bg-white rounded-t-4xl lg:rounded-none flex items-start justify-center pt-8 lg:pt-0 lg:items-center">
            <div className="w-full px-10 py-6">
                <div className="text-left ">
                    {/* Address Section */}
                    <div className="mb-6">
                        <h3 className="text-gray-800 font-semibold mb-2">Address</h3>
                        <p className="text-gray-600 text-md leading-relaxed">
                            In front of Essar Petrol Pump Near Bijasan Mata<br />
                            Temple, Sannod, Dewas (M.P.)
                        </p>
                    </div>

                    {/* Email Section */}
                    <div className="mb-6">
                        <h3 className="text-gray-800 font-semibold mb-2">Send Email</h3>
                        <a
                            href="mailto:booking@ecoholidayresorts.com"
                            className="text-blue-500 hover:text-blue-700 text-md "
                        >
                            booking@ecoholidayresorts.com
                        </a>
                    </div>

                    {/* Phone Section */}
                    <div>
                        <h3 className="text-gray-800 font-semibold mb-2">Call Us</h3>
                        <div className="space-y-1">
                            <a
                                href="tel:+919109101761"
                                className="block text-blue-500 hover:text-blue-700 text-md"
                            >
                                +91 91091-01761
                            </a>
                            <a
                                href="tel:+919109101763"
                                className="block text-blue-500 hover:text-blue-700 text-md"
                            >
                                +91 91091-01763
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}