import React from 'react'
import ContactCard from './ContactCard'
import SocialBox from './SocialBox'

const ContactHero = () => {
    return (
        <div className='w-full h-[70vh] sm:min-h-[100vh] flex justify-center items-center overflow-hidden relative'>
            <SocialBox/>
            <div className='w-full h-full absolute hero-grad z-40'></div>
            <img src="/contact-mobile-hero.jpg" className='w-full h-full absolute  object-cover' alt="" />
            <div className='relative z-50 sm:px-15 sm:h-[70%]  flex flex-col items-center justify-center sm:items-start sm:justify-between  gap-10 w-full '>
                <h1 className='royal-heading !text-[#ffff]'>Contact Us</h1>
                <div className='hidden sm:block '>
                    <ContactCard />
                </div>
            </div>
        </div>
    )
}

export default ContactHero