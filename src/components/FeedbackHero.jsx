import React from 'react'
import FeedbackForm from './FeedbackForm'

const FeedbackHero = () => {
    return (
        <div className='w-full h-[70vh] md:min-h-[100vh] flex  overflow-hidden relative'>
            <div className='w-full h-full absolute hero-grad z-40'></div>
            <img src="/gallery-hero.jpg" className='w-full h-full absolute sm:object-[0%_25%] object-cover' alt="" />
            <div className='relative z-50 sm:px-15  px-5 py-25 sm:py-45 flex flex-col items-center justify-center sm:items-start sm:justify-start sm:gap-20 gap-10 w-full sm:w-[25%]'>
                <h1 className='royal-heading !text-[#ffff]'>Feedback</h1>
                <div className='hidden sm:block '>
                    <FeedbackForm />
                </div>
            </div>
        </div>
    )
}

export default FeedbackHero