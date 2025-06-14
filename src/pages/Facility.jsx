import React from 'react'
import FacilityHero from '../components/FacilityHero'
import FacilityCards from '../components/FacilityCards'

const Facility = () => {
    return (
        <div className='min-h-screen'>
            <FacilityHero />
            <FacilityCards/>
            
        </div>
    )
}

export default Facility