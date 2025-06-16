import React, { useState } from 'react';
import { Calendar, Users, Bed, Plus, Minus, ArrowRight } from 'lucide-react';
import BookingCard from './BookingCard';
import MobileExpand from './MobileExpand';
import SocialBox from './SocialBox';

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative sm:h-[120vh] h-[105svh] overflow-hidden rounded-b-4xl sm:rounded-b-none">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/eco-hero.mp4" type="video/mp4" />
          {/* Fallback background image */}
          <div className="absolute z-0 inset-0 bg-gradient-to-r from-green-900 to-blue-900"></div>
        </video>

        {/* Overlay */}
        <div className='w-full h-full absolute hero-grad '></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Social Media Icons - Desktop Only */}
          <SocialBox/>

          {/* Main Content */}
          <div className="flex h-full w-full sm:items-center  py-20 sm:py-0">
            <div className="px-6 w-full lg:px-16">
              <div className="w-full flex flex-col gap-8 sm:gap-1 justify-between h-full">
                <h1 className="text-white leading-trim text-edge-cap 
               royal font-normal 
               text-[68px] leading-[42px] tracking-[-1.36px] capitalize
               sm:text-[160px] sm:leading-[100px] sm:tracking-[-3.2px]
               mb-15 [text-shadow:_0px_3.787px_75.74px_rgba(255,255,255,0.4)]">
                  A Serene &<br className='sm:block hidden' />
                  Leisurely<br />
                  Experience <br className='sm:block hidden' />
                  Awaits<br className='sm:hidden block' /> You At<br className='sm:block hidden' />
                  <span className="font-light italic">The Eco<br />
                    Holiday Resort</span>
                </h1>


                {/* Desktop CTA Button */}
                <div className="hidden sm:block">
                  <button className="bg-white text-center justify-center w-full sm:w-auto text-black px-8 py-2 rounded-full font-medium text-xs hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                    Check Availability
                    <ArrowRight size={20} />
                  </button>
                </div>
                <div className="block sm:hidden">
                  <MobileExpand />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Booking Card - Desktop Only (Half outside hero) */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -bottom-32 z-20 w-full px-6 lg:px-16">
        <BookingCard />
      </div>


    </div>
  );
};

export default Hero;