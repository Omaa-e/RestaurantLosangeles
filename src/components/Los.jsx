import React from 'react'
import los1 from '../assets/losKitchen.avif'
import los2 from '../assets/losFod.avif'

const Los = () => {
  return (
    <div className=' px-7 py-20 '>
        <div className='mx-auto flex flex-col lg:flex-row justify-center items-center lg:gap-10  '>
            <div className='flex justify-around gap-2 '>
                <div className="min-w-[200px] h-[320px] mr-[10px]">
                    <img src={los1} className=' object-cover min-w-[200px] object-cover max-w-[100%]' alt="" />
                </div>
                <div className="min-w-[200px] h-[320px]">
                    <img src={los2} className=' object-cover min-w-[200px] object-cover max-w-[100%]' alt="" />
                </div>
            </div>
            <div className='lg:max-w-md gap-4 pb-11'>
                <h1 className='font-bold text-2xl'>GIRL & THE GOAT LOS ANGELES</h1>
                
                <p>In summer 2021, Girl & the Goat went west for sunny skies and new culinary adventures. Chef Stephanie Izard and her team are thrilled to be part of LA’s vibrant restaurant community and take advantage of the area’s incredible bounty of produce and long growing seasons. While Girl & the Goat shares the global influence and bold flavors of its Chicago flagship, the culinary team is always crafting new dishes inspired by California produce and local flavors.</p>
                
            </div>
        </div>
    </div>
  )
}

export default Los