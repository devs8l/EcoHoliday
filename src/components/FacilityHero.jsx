import React from 'react';
import SocialBox from './SocialBox';

const FacilityHero = () => {
    return (
        <div className='w-full h-[30vh] md:min-h-[75vh] flex relative'>
            <SocialBox/>
            {/* Background image - hidden on mobile, shown on md and up */}
            <img 
                src="/about-hero.jpg" 
                className='w-full h-full absolute object-cover hidden md:block' 
                alt="Facilities background" 
            />
            
            {/* Gradient overlay - hidden on mobile, shown on md and up */}
            <div className='w-full h-full absolute hero-grad z-40 hidden md:block'></div>
            
            {/* Content */}
            <div className='relative z-50 sm:px-15 px-5 py-25 sm:py-45 flex flex-col sm:gap-20 gap-10 items-start sm:w-[25%]'>
                <h1 className='royal-heading sm:!text-[#ffff]'>Facilities</h1>
            </div>
        </div>
    );
};

export default FacilityHero;