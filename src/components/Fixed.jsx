import React from 'react'
import fixedimage1 from '../assets/fixedimage1.avif'

const Fixed = () => {
  return (
    <div>
        <div>
            <img src={fixedimage1} className='fixed h-[100vh] w-full object-cover' alt="" />
        </div>
    </div>
  )
}

export default Fixed