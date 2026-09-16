import React, { useState,useEffect } from 'react'
import logo from '../assets/logo.avif'
import { VscMenu } from "react-icons/vsc"
import { VscClose } from "react-icons/vsc"

const Nav = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const [isScrolled, setIsScrolled] =useState(false)
    
    useEffect(()=> {
        const handleScroll = ()=>{
            if (window.scrollY > 0){
                setIsScrolled(true)
            } else{
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
 
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

  return (
    <div className='w-full text-black fixed top-0 left-0 z-50 ${isScrolled ? "bg-white" : "bg-green"}'>
      <div className='mx-auto text-center px-12 lg:px-16  xl:pr-18 border-b border-white'>

        {/* Large screens */}
        <div className='hidden md:grid grid-cols-3 items-center md:h-13.5 xl:h-[4.5rem] '>
          {/* Left Links */}
          <div className='flex items-center'>
            <a href="" className='font-bold md:text-xs my-3 mr-4 lg:mr-6  hover:underline text-white'>
              about
            </a>
            <a href="" className='font-bold md:text-xs my-3 mx-4  lg:mx-7 hover:underline text-white'>
              private dining
            </a>
            <a href="" className='font-bold md:text-xs my-3 mx-4  lg:mx-6 hover:underline text-white'>
              menu
            </a>
           
          </div>

           {/* Logo — centered by sitting in the middle grid */}
          <div className='flex justify-center items-center'>
            <img className="md:h-5 lg:h-8 object-cover" src={logo} alt="logo" />
          </div>

          {/* Right Links */}
          <div className='flex items-center justify-end'>
            <a href="" className='md:text-xs font-bold my-3 mx-4  lg:ml-8 hover:underline text-white'>
              contact
            </a>
            <a href="" className='font-bold md:text-xs my-3 mx-4  lg:mx-8 hover:underline text-white'>
              to-go
            </a>
            <a href="" className='font-bold md:text-xs my-3 mx-4  lg:mx-8 hover:underline text-white'>
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
