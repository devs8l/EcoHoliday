import React from 'react'

const ServiceHero = ({url}) => {
    return (
        <div className='w-full h-[60vh] md:min-h-[75vh] flex  relative'>
            <div className='w-full h-full absolute hero-grad z-40'></div>
            <img src={url} className='w-full h-full absolute object-cover' alt="" />
        </div>
    )
}

export default ServiceHero