import React from 'react'
import MapContact from '../components/MapContact'
import ContactHero from '../components/ContactHero'
import ContactCard from '../components/ContactCard'

const Contact = () => {
    return (
        <div>
            <ContactHero />
            <div className='sm:hidden block '>
                <ContactCard />
            </div>
            <MapContact />
        </div>
    )
}

export default Contact