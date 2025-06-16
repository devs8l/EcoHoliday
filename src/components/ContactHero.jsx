import React from 'react'
import ContactCard from './ContactCard'
import SocialBox from './SocialBox'

const ContactHero = () => {
    return (
        <div className='w-full h-[70vh] md:min-h-[100vh] flex  overflow-hidden relative'>
            <SocialBox/>
            <div className='w-full h-full absolute hero-grad z-40'></div>
            <img src="/contact-mobile-hero.jpg" className='w-full h-full absolute  object-cover' alt="" />
            <div className='relative z-50 sm:px-15  px-5 py-25 sm:py-45 flex flex-col items-center justify-center sm:items-start sm:justify-start sm:gap-40 gap-10 w-full sm:w-[25%]'>
                <h1 className='royal-heading !text-[#ffff]'>Contact</h1>
                <div className='hidden sm:block '>
                    <ContactCard />
                </div>
            </div>
        </div>
    )
}

export default ContactHero