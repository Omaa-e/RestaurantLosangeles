import React from 'react'
import img from '../assets/reserve.avif'

const Reservation = () => {
  return (
    <div className='relative w-full'>
      <img
        src={img}
        alt=""
        className='w-full h-[380px] object-cover'
      />
      <div className='absolute inset-0 bg-white/30'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10'>
        <h1 className='text-3xl font-bold mb-4'>
          make a reservation
        </h1>
        <a
          href='#reserve'
          className='bg-[#A76435] hover:bg-[#C9A083] text-white py-3 px-8 transition'
        >
          find a table
        </a>
        </div>
    </div>
  )
}

export default Reservation