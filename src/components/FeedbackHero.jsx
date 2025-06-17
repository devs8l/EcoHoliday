import React from 'react'
import FeedbackForm from './FeedbackForm'
import SocialBox from './SocialBox'

const FeedbackHero = () => {
    return (
        <div className='w-full h-[70vh] md:min-h-[110vh] flex  items-center  overflow-hidden relative'>
            <SocialBox/>
            <div className='w-full h-full absolute hero-grad z-40'></div>
            <img src="/feedback-mobile-hero.jpg" className='w-full h-full absolute  object-cover' alt="" />
            <div className='relative z-50 sm:px-15 flex flex-col items-center justify-center sm:items-start sm:justify-start sm:gap-20 gap-10 w-full sm:w-[25%]'>
                <h1 className='royal-heading !text-[#ffff]'>Feedback</h1>
                <div className='hidden sm:block '>
                    <FeedbackForm />
                </div>
            </div>
        </div>
    )
}

export default FeedbackHero