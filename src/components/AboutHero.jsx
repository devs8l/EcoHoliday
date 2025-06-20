import React from 'react'
import SocialBox from './SocialBox'

const AboutHero = () => {
    return (
        <div className='w-full h-[80vh]  sm:min-h-screen flex justify-center items-center relative'>
            <SocialBox/>
            <div className='w-full h-full absolute hero-grad z-40'></div>
            <img src="/about-hero.jpg" className='w-full h-full absolute object-cover' alt="" />
            <div className='relative z-50 sm:px-15 px-3   flex flex-col sm:gap-20 gap-10 items-start  '>
                <h1 className='royal-heading !text-[#ffff]'>About Us</h1>
                <p className='para sm:w-[25%]'>Eeshani Resoville Pvt. Ltd. presents The Eco Holiday Resort, perfectly located for leisure guests near Indore, Dewas, and Ujjain. Escape the hustle and bustle of the city and immerse yourself in the beauty of village life. Enjoy the quiet, peaceful surroundings and pollution-free fresh air that will surely rejuvenate you.

                    <br /> <br />This luxurious Resort Is Located In Sannod Village.</p>
            </div>
        </div>
    )
}

export default AboutHero