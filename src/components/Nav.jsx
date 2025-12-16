import React,{useState} from 'react'
import logo from '../assets/logo.avif'
import { div } from 'framer-motion/client'
import { VscMenu } from "react-icons/vsc";

const Nav = () => {
   const[nav, setNav]= useState(false)
    const handleClick =() => setNav(!nav)

    const handleClose = () => setNav(!nav)
  return (
    <div className='w-full bg-[#757263] text-white'>
      <div className='mx-auto lg:px-15 xl:px-20'>
        {/* Large screens */}
        <div className='hidden lg:flex justify-between items-center h-22'>
          {/* Left Links */}
          <div className='flex items-center space-x-4 xl:space-x-8'>
            <a
              href=""
              className='font-medium p-5  xl:mx-16 hover:underline'
            >
              private dining
            </a>

            <a
              href=""
              className='font-medium p-5  xl:mx-16 hover:underline'
            >
              about
            </a>
          </div>

          {/* Logo */}
          <div className='flex-shrink-0'>
            <img className="h-11 w-auto" src={logo} alt="" />
          </div>
           <div className='flex items-center space-x-4 xl:space-x-8'>
            <a
              href=""
              className='font-medium  p-5 xl:mx-10'
            >
              menu
            </a>

            <a
              href=""
              className='font-medium  p-5 xl:mx-10'
            >
              contact
            </a>

            <a
              href=""
              className='font-medium  p-5 xl:mx-10'
            >
              reserve
            </a>
          </div>
        </div>

        {/* Small screens */}
        <div className='flex lg:hidden justify-between items-center h-16 px-9'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <img className="h-8 px-2" src={logo} alt="" />
          </div>
          <VscMenu className='h-9 w-9' onClick={handleClick} />
        </div>
        <ul className= {!nav ? 'hidden' : 'absolute bg-[#757263] w-full pb-6'}>
           <li onClick={handleClose} className='w-full py-5 font-medium cursor-default text-center hover:underline'>
              private dining</li>
              <li onClick={handleClose} className=' w-full py-5 font-medium cursor-default text-center hover:underline'>
                about
              </li>
              <li onClick={handleClose} className='w-full py-5 font-medium cursor-default text-center hover:underline'>
                menu
              </li>
              <li onClick={handleClose} className='w-full py-5 font-medium cursor-default text-center hover:underline'>
                contact
              </li>
              <li onClick={handleClose} className='w-full py-5 font-medium cursor-default text-center hover:underline'>
                reserve
              </li>
           </ul>
      </div>
    </div>
  )
}

export default Nav