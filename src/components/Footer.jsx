import React from 'react';
import { MapPin, Facebook, Instagram, MessageCircle, Youtube } from 'lucide-react';
import { useLocation } from 'react-router-dom';

// Route configuration with different backgrounds and gradients
const routeConfig = {
    '/': {
        backgroundImage: '/foot-home.png',
        gradientClass: 'foot-grad-top',
        bgColor: '#766C65',
        textColor: '#FFFFFF',
        heading: 'Escape the hustle of city life and reconnect with nature at The Eco Holiday Resort, your luxury retreat in serenity.'
    },
    '/about-us': {
        backgroundImage: '/about-foot.jpg',
        gradientClass: 'foot-grad-top-about',
        bgColor: '#ffffff',
        textColor: '#000',
        heading: 'Escape the hustle of city life and reconnect with nature at The Eco Holiday Resort, your luxury retreat in serenity.'
    },
    '/services': {
        backgroundImage: '/foot-services.png',
        gradientClass: 'foot-grad-top-services',
        bgColor: '#766C65',
        textColor: '#FFFFFF',
        heading: 'Escape the hustle of city life and reconnect with nature at The Eco Holiday Resort, your luxury retreat in serenity.'
    },
    '/facilities': {
        backgroundImage: '/pool-1.jpg',
        gradientClass: 'foot-grad-top-facility',
        bgColor: '#656F77',
        textColor: '#FFFFFF',
        heading: 'Escape the hustle of city life and reconnect with nature at The Eco Holiday Resort, your luxury retreat in serenity.'
    },
    '/gallery': {
        backgroundImage: '/gallery-foot.jpg',
        gradientClass: 'foot-grad-top-about',
        bgColor: '#ffffff',
        textColor: '#000',
        heading: 'Escape the hustle of city life and reconnect with nature at The Eco Holiday Resort, your luxury retreat in serenity.'
    },
    '/feedback': {
        backgroundImage: '/pool-1.jpg',
        gradientClass: 'foot-grad-top-facility',
        bgColor: '#656F77',
        textColor: '#FFFFFF',
        heading: 'Escape the hustle of city life and reconnect with nature at The Eco Holiday Resort, your luxury retreat in serenity.'
    },
    '/contact-us': {
        backgroundImage: '/foot-contact.png',
        gradientClass: 'foot-grad-top-contact',
        bgColor: '#766C65',
        textColor: '#FFFFFF',
        heading: 'Escape the hustle of city life and reconnect with nature at The Eco Holiday Resort, your luxury retreat in serenity.'
    }
};

const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const config = routeConfig[currentPath] || routeConfig['/'];

    return (
        <div className="relative overflow-hidden afacad rounded-t-4xl sm:rounded-t-none">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('${config.backgroundImage}')`
                }}
            />
            <div className='foot-grad absolute bottom-0 left-0 right-0 h-full'></div>

            {/* Main Content Container */}
            <div className="relative z-10 flex flex-col">
                {/* Hero Content */}
                <div className={`h-[75vh] ${config.gradientClass} flex items-start justify-center px-4`}>
                    <div className="text-center mx-auto">
                        {/* Main Heading - using inline style for dynamic color */}
                        <h1
                            className="w-[90%] sm:w-[85%] mt-20 mx-auto royal-heading"
                            style={{ color: config.bgColor }}
                        >
                            {config.heading}
                        </h1>

                        {/* CTA Button - using inline style for dynamic color */}
                        <div className="mt-8 md:mt-12">
                            <button
                                className="bg-opacity-60 hover:bg-opacity-80 px-8 py-3 rounded-full text-sm transition-all duration-300 backdrop-blur-sm"
                                style={{ backgroundColor: config.bgColor, color: config.textColor }}
                            >
                                Check Availability →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Rest of your footer content remains exactly the same */}
                <div className="grid grid-cols-2 sm:w-[50%] lg:grid-cols-2 gap-8 p-6 md:p-8">
                    {/* Get in Touch */}
                    <div className="rounded-lg p-6 text-white">
                        <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-[#FFFFFF99] mt-1" />
                                <span className='text-[#FFFFFF99]'>Eco Holiday Resorts<br />
                                    In front of Esco Petrol Pump<br />
                                    Near Bijasan Mate Temple<br />
                                    Samod, Devwa (ME)<br />
                                    (+91) 910-910-17-61<br />
                                    (+91) 910-910-17-63</span>
                            </div>
                        </div>
                    </div>

                    {/* Important Links */}
                    <div className="rounded-lg p-6 text-white">
                        <h3 className="text-xl font-semibold mb-4 text-white">Important Links</h3>
                        <div className="space-y-2 text-sm">
                            <div><a href="#" className="hover:text-gray-300 text-[#FFFFFF99] transition-colors">About Us</a></div>
                            <div><a href="#" className="hover:text-gray-300 text-[#FFFFFF99] transition-colors">Dayout Party Booking</a></div>
                            <div><a href="#" className="hover:text-gray-300 text-[#FFFFFF99] transition-colors">Stay Room Booking</a></div>
                            <div><a href="#" className="hover:text-gray-300 text-[#FFFFFF99] transition-colors">Contact Us</a></div>
                            <div><a href="#" className="hover:text-gray-300 text-[#FFFFFF99] transition-colors">Terms & Conditions</a></div>
                            <div><a href="#" className="hover:text-gray-300 text-[#FFFFFF99] transition-colors">Privacy Policy</a></div>
                            <div><a href="#" className="hover:text-gray-300 text-[#FFFFFF99] transition-colors">Refund / Cancellation</a></div>
                        </div>
                    </div>

                    {/* Reach Us - Map */}
                    <div className="rounded-lg p-6 text-white">
                        <h3 className="text-xl font-semibold mb-4 text-white">Reach Us</h3>
                        <div className="h-50 overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4526.570046156957!2d76.11807077600308!3d22.775165825514254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396320775632c687%3A0x83ecc0430ac04e1a!2sEco%20Holiday%20Resorts!5e1!3m2!1sen!2sin!4v1749712636896!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Eco Holiday Resort Location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="w-[60%] absolute bottom-0 right-0 px-6 md:px-8 lg:px-12 py-4 mt-8 mb-5">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div className="text-white text-sm flex flex-col items-center gap-5">
                            <h3>© 2025 Eco Holiday Resorts. All Rights Reserved.</h3>
                            <div className="flex gap-4">
                                <Facebook className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
                                <Instagram className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
                                <MessageCircle className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
                                <Youtube className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
                            </div>
                        </div>
                        <div className="text-white text-sm">
                            Designed & Developed by Stellar8 Labs
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;