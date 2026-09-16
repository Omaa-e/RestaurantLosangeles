import React from 'react'

const Contact=() => {
  return (
    <div className='w-full h-[40px] relative z-10'>
        <div className='items-center flex justify-center bg-white'>
                <div className='text-center grid grid-cols-1 md:grid-cols-3 '>
                    {/* Address container */}
                    <div>
                        <h1 className='text-lg font-xl font-bold'>address</h1>
                        <p className='text-[#807F7E]'>555-3 Mateo St.<br/> Los Angeles, CA</p>
                    
                        <div className='flex flex-col sm:flex-row gap-2 mt-2'>
                            
                                <a href="#" className='bg-[#A76435] hover:bg-[#C9A083] text-white py-2 px-5 text-center'>
                                    directions
                                </a>
                        </div>
                    </div>
            {/* Hours container */}
                    <div>
                        <h1>hours</h1>

                        <div>
                        <p>Monday & Tuesday <br/> 5pm -9:30pm</p> 
                        <p>Wednesday - Friday <br/> 5pm -10pm</p>
                        <p>Saturday <br/> 10am - 2pm <br/> 5pm - 10pm</p>
                        <p>Sunday <br/> 10am - 2pm <br/> 5pm - 9:30pm</p>
                        </div>
                            
                    </div>
            
            {/* Contact container */}
                    <div>
                        <h1>contact</h1>
                        <p className='underline text-[#807F7E] hover:text-[#A3A2A0] hover:'>213-799-4628</p>
                        <a href="#" className='underline text-[#807F7E] hover:text-[#A3A2A0]'>info.la@girlandthegoat.com</a>
                    </div>
            </div> 
        </div>
    </div>
  )
}

export default Contact