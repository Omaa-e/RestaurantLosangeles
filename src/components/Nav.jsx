import React, { useState } from 'react'
import logo from '../assets/logo.avif'
import { VscMenu } from "react-icons/vsc"
import { VscClose } from "react-icons/vsc"

const Nav = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='w-full text-black fixed top-0 left-0 z-50'>
      <div className='mx-auto text-center lg:px-15 xl:px-20 border-b border-white'>

        {/* Large screens */}
        <div className='hidden md:grid grid-cols-3 items-center md:h-13.5 xl:h-[4.5rem] '>
          {/* Left Links */}
          <div className='flex items-center space-x-4'>
            <a href="" className='font-bold text-sm my-3 mr-8  hover:underline text-white'>
              about
            </a>
            <a href="" className='font-bold text-sm my-3 mx-8 hover:underline text-white'>
              private dining
            </a>
            <a href="" className='font-bold text-sm my-3 mx-8  hover:underline text-white'>
              menu
            </a>
           
          </div>

          {/* Logo — centered by sitting in the middle grid column */}
          <div className='flex justify-center items-center'>
            <img className="h-8 object-cover" src={logo} alt="logo" />
          </div>

          {/* Right Links */}
          <div className='flex items-center justify-end space-x-4'>
            <a href="" className='text-sm font-bold p-5 hover:underline text-white'>
              contact
            </a>
            <a href="" className='font-bold text-sm p-5 hover:underline text-white'>
              to-go
            </a>
            <a href="" className='font-bold text-sm p-5 hover:underline text-white'>
              reserve
            </a>
          </div>
        </div>

        {/* Small screens */}
        <div className='flex md:hidden justify-between items-center px-7'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <img className="h-8 px-2" src={logo} alt="logo" />
          </div>
          {nav ? (
            <VscClose size={60} className=' cursor-pointer font-white' onClick={handleClick} />
          ) : (
            <VscMenu className='h-12 w-12 cursor-pointer font-white' onClick={handleClick} />
          )}
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-[#757263] w-full pb-6'}>
          <li onClick={handleClick} className='w-full py-5 font-medium cursor-pointer text-center hover:underline'>
            private dining
          </li>
          <li onClick={handleClick} className='w-full py-5 font-medium cursor-pointer text-center hover:underline'>
            about
          </li>
          <li onClick={handleClick} className='w-full py-5 font-medium cursor-pointer text-center hover:underline'>
            menu
          </li>
          <li onClick={handleClick} className='w-full py-5 font-medium cursor-pointer text-center hover:underline'>
            contact
          </li>
          <li onClick={handleClick} className='w-full py-5 font-medium cursor-pointer text-center hover:underline'>
            reserve
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
