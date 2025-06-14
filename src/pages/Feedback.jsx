import React from 'react'
import FeedbackHero from '../components/FeedbackHero'
import FeedbackForm from '../components/FeedbackForm'

const Feedback = () => {
    return (
        <div>
            <FeedbackHero />
            <div className='sm:hidden block '>
                <FeedbackForm />
            </div>
        </div>
    )
}

export default Feedback