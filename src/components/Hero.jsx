import React, { useState } from 'react';
import { Calendar, Users, Bed, Plus, Minus, ArrowRight } from 'lucide-react';
import BookingCard from './BookingCard';
import MobileExpand from './MobileExpand';

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
        <div className="absolute inset-0 bg-[#000000a6]"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Social Media Icons - Desktop Only */}
          <div className="hidden lg:block absolute right-8 top-[5%] bg-[#0000002d] p-3">
            <div className="flex flex-col gap-4">
              <a href="#" className="w-5 h-5   flex items-center justify-center text-white hover:bg-opacity-30 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="w-5 h-5   flex items-center justify-center text-white hover:bg-opacity-30 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="w-5 h-5   flex items-center justify-center text-white hover:bg-opacity-30 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088" />
                </svg>
              </a>
              <a href="#" className="w-5 h-5   flex items-center justify-center text-white hover:bg-opacity-30 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

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