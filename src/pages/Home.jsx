import React from 'react'
import Hero from '../components/Hero'
import EcoBento from '../components/EcoBento'
import Packages from '../components/Packages'
import PoolRoom from '../components/PoolRoom'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        <Hero/>
        <EcoBento/>
        <Packages/>
        <PoolRoom/>
        <Testimonials/>
    </div>
  )
}

export default Home