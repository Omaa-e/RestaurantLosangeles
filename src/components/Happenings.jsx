import React from 'react'
import img from '../assets/hapimg.jpeg'



const Happenings = () => {
  return (
    <div className='pl-[5%] py-20'>
        <div className='flex flex-col md:flex-row'>
            <div className='w-[50%]'>
                <img className='w-[85%] min-h-[400px] max-w-[100%] object-cover' src={img} alt="" />
            </div>
            <div className='flex flex-row items-center w-[50%] justify-center px-[5%] py-[8%]'>
                <div className='items-center text-center'>
                    <h3 className='text-2xl'>Weekend Brunch</h3>
                    <p>Join us every Saturday & Sunday from 10am-2pm to enjoy shareable brunch favorites, handcrafted cocktails, and more.Gather your G.O.A.T crew for delicious dishes and good vibes!</p>
                    <a className='bg-[#A76435] hover:bg-[#C9A083] text-white py-2 px-6 transition' href="">
                        Reserve
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Happenings