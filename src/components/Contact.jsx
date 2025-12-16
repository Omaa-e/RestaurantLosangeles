import React from 'react'

const Contact = () => {
  return (
    <div className='w-full absolute'>
        <div className='items-center flex justify-center bg-white'>
            <div className='text-center  grid grid-cols-1 md:grid-cols-3 gasp-48'>
            {/* Address container */}
            <div>
                <h1 className='text-lg font-xl font-bold'>address</h1>
                <p className='text-[#807F7E]'>555-3 Mateo St.Los Angeles, CA</p>
                <button className='bg-[#A76435]  px-5 py-2 text-center hover:bg-[#C9A083] text-white'>directions</button>
            </div>
            {/* Hours container */}
            <div>
                <h1>hours</h1>
            </div>
            {/* Contact container */}
            <div>
                <h1>contact</h1>
                <p className='underline text-[#807F7E] hover:text-[#A3A2A0] hover:'>213-799-4628</p>
                <p className='underline text-[#807F7E] hover:text-[#A3A2A0]'>info.la@girlandthegoat.com</p>
            </div>
        </div> 
        </div>
       
    </div>
  )
}

export default Contact