import React from 'react'

const GalleryHero = () => {
    return (
        <div className='w-full h-[70vh] md:min-h-[75vh] flex rounded-b-4xl md:rounded-b-none overflow-hidden relative'>
            <div className='w-full h-full absolute hero-grad z-40'></div>
            <img src="/gallery-hero.jpg" className='w-full h-full absolute sm:object-[0%_25%] object-cover' alt="" />
            <div className='relative z-50 sm:px-15  px-5 py-25 sm:py-45 flex flex-col items-center justify-center sm:items-start sm:justify-start sm:gap-20 gap-10 w-full sm:w-[25%]'>
                <h1 className='royal-heading !text-[#ffff]'>Gallery</h1>
            </div>
        </div>
    )
}

export default GalleryHero