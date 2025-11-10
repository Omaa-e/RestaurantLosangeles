import React from 'react'
import logo from '../assets/logo.avif'
import { div } from 'framer-motion/client'
import { VscMenu } from "react-icons/vsc";

const Nav = () => {
  return (
    <div className='w-full bg-[#757263] text-white'>
      <div className='mx-auto lg:px-20 xl:px-16'>
        {/* Large screens */}
        <div className='hidden lg:flex justify-between items-center h-24'>
          {/* Left Links */}
          <div className='flex items-center space-x-4 xl:space-x-8'>
            <a
              href=""
              className='font-medium p-4'
            >
              private dining
            </a>

            <a
              href=""
              className='font-medium p-4'
            >
              about
            </a>
          </div>

          {/* Logo */}
          <div className='flex-shrink-0'>
            <img className="h-9 w-auto" src={logo} alt="" />
          </div>
           <div className='flex items-center space-x-4 xl:space-x-8'>
            <a
              href=""
              className='font-medium'
            >
              menu
            </a>

            <a
              href=""
              className='font-medium'
            >
              contact
            </a>

            <a
              href=""
              className='font-medium'
            >
              reserve
            </a>
          </div>
        </div>

        {/* Small screens */}
        <div className='flex lg:hidden justify-between items-center h-16 px-11'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <img className="h-8 w-auto" src={logo} alt="" />
          </div>
          <VscMenu className='h-9 w-9'/>
        </div>
      </div>
    </div>
  )
}

export default Nav