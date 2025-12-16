import React from 'react'
import img1 from "../assets/hero-1.avif"

const Hero = () => {
  return (
    <div className='w-full h-[100vh] relative'>
        <div className='w-full h-full'>
            <img src={img1} className='object-cover' alt="" />
        </div>
    </div>
  )
}

export default Hero