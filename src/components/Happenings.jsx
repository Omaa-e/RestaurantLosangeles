import React from 'react'
import img from '../assets/hapimg.jpeg'



const Happenings = () => {
  return (
    <div className='pl-[3%] py-20'>

        <div className='flex flex-col lg:flex-row'>
        <div className=' lg:w-[50%]'>
                <img className='w-[85%] min-h-[400px] max-w-[100%] object-cover' src={img} alt="" />
            </div>
            <div className='flex flex-col lg:flex-row items-center  justify-center px-[5%] py-[8%] lg:w-[50%]'>
                <div className='items-center text-center'>
                    <h3 className='text-[30px] pb-2 font-semibold'>Weekend Brunch</h3>
                    <p className="mb-[15px] text-[16px] text-center">Join us every Saturday & Sunday from 10am-2pm to enjoy shareable brunch favorites, handcrafted cocktails, and more.Gather your G.O.A.T crew for delicious dishes and good vibes!</p>
                    <a className='bg-[#7C4B27] hover:bg-[#C9A083] text-center text-white py-3 px-6 mx-[1rem] text-[14px] transition' href="">
                        Reserve
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Happenings