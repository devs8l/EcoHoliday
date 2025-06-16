import React from 'react'
import DayOutParty from '../components/DayOutParty'
import FeedbackHero from '../components/FeedbackHero'
import ServiceHero from '../components/ServiceHero'
import RoomBooking from '../components/RoomBooking'

const DayOutPartyPage = () => {
    return (
        <div>
            <div className='sm:hidden block '>
                <ServiceHero url={'/eco-pool.png'} />
            </div>
            <DayOutParty />
            {/* <div className='hidden sm:block '>
                <DayOutParty />
            </div>
            <div className='sm:hidden block '>
            </div> */}

        </div>
    )
}

export default DayOutPartyPage