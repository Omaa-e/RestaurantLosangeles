import React from 'react'
import fixedimage1 from '../assets/fixedimage1.avif'

const Fixed = () => {
  return (
    <section
      className='relative h-[70vh] bg-fixed bg-cover bg-center'
      style={{ backgroundImage: `url(${fixedimage1})` }}
    >
      
    </section>
  )
}

export default Fixed