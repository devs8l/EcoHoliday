import React from 'react'
import RoomBooking from '../components/RoomBooking'
import ServiceHero from '../components/ServiceHero'

const RoomBookingPage = () => {
    return (
        <div>
            <div className='sm:hidden block '>
                <ServiceHero url={'/cottage-bed.jpg'} />
            </div>
            <RoomBooking />
        </div>
    )
}

export default RoomBookingPage