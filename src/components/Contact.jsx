import React from 'react'

const Contact=() => {
  return (
    <div className='w-full  relative z-10 py-[80px]'>
        <div className='items-center flex justify-center bg-white'>
            <div className='text-center grid grid-cols-1 md:grid-cols-3 gap-x-[20px] gap-y[20px]'>
                {/* Address container */}
                <div>
                    <h1 className='text-lg text-[20px] font-semibold lg:text-[24px] mb-[20px]'>address</h1>
                    <p className='text-[#434342] text-[18px]'>555-3 Mateo St.<br/> Los Angeles, CA</p>
                
                     <div className=' flex flex-col gap-2 mt-2'>
                    
                        <a href="#" className='text-[14px] bg-[#7C4B27] hover:bg-[#C9A083] text-center text-white py-[16px] px-[12px] font-bold w-auto'>
                            directions
                        </a>
                        <a href="#" className='bg-[#7C4B27] hover:bg-[#C9A083] text-white text-center my-[0.5rem] text-[14px] py-[16px] px-[32px] font-bold w-auto'>
                            reservation
                        </a>
                    </div>
                </div>
    {/* Hours container */}
        <div>
            <h1 className="font-semibold text-[20px] lg:text-[24px] mb-[20px]">hours</h1>

            <div className='flex flex-col gap-3'>
                <div>
                    <p className='font-semibold text-[#434342]'>Monday & Tuesday</p>
                    <p className="text-[#434342]">5pm - 9:30pm</p>
                </div>
                <div>
                    <p className='font-semibold text-[#434342] text-[18px]'>Wednesday - Friday</p>
                    <p className="text-[#434342] text-[18px]">5pm - 10pm</p>
                </div>
                <div>
                    <p className='font-semibold text-[#434342] text-[18px]'>Saturday</p>
                    <p className="text-[#434342] text-[18px]">10am - 2pm</p>
                    <p className="text-[#434342] text-[18px]">5pm - 10pm</p>
                </div>
                <div>
                    <p className='font-semibold text-[#434342] text-[18px]'>Sunday</p>
                    <p className="text-[#434342] text-[18px]">10am - 2pm</p>
                    <p className="text-[#434342] text-[18px]">5pm - 9:30pm</p>
            </div>
        </div>
                            
        </div>
            <div>
                 {/* Contact container */}
                <div>
                    <h1 className="font-semibold text-[20px] lg:text-[24px] mb-[20px]">contact</h1>
                    <div className="flex flex-col">
                        <a href="#" className='underline text-[#434342] hover:text-[#A3A2A0] hover:text-[#A3A2A0] text-[18px]'>213-799-4628</a>
                        <a href="#" className='underline text-[#434342] mt-[20px] hover:text-[#A3A2A0] text-[18px]'>info.la@girlandthegoat.com</a>
                    </div>
                    
                </div>
                
                <div>
                    <h1 className="font-semibold text-[20px] lg:text-[24px] my-[20px]">pick up & delivery</h1>
                    <a href="#" className='underline text-[#434342] hover:text-[#A3A2A0] text-[18px]'>order now</a>
                </div>
            </div>
           
            </div> 
        </div>
    </div>
  )
}

export default Contact