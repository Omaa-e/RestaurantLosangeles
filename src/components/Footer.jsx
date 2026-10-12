import React from 'react'
import img from '../assets/gg.avif'
import { SlSocialInstagram } from "react-icons/sl";
import { LiaFacebookSquare } from "react-icons/lia";

const Footer = () => {
  return (
    <div className='bg-[#E1CCBE]'>
        <div className='mx-auto'>
            <div className='text-center py-20'>
                <h1 className='text-black text-[30px] font-semibold'>join the herd!</h1>
                <p className='text-[16px] mt-[5px] mb-[30px]'>join our mailing list and keep up with all the exciting things</p>
                <a href="#" className="text-[14px] bg-[#7C4B27] text-center text-white py-[16px] px-[32px]">sign me up</a>
            </div>

        </div>

        {/* the second part of the footer */}
       <div className='w-full px-[8%] py-[5%] flex flex-col justify-center'>
          <div className='flex flex-col md:flex-row justify-between items-start'>
            <a href="">
              <img className='object-cover h-10' src={img} alt="" />
            </a>
          <div className= "flex flex-row gap-x-20 ">
              <div className='w-[100%] flex flex-row '>
               <div className='flex flex-col flex-start'>
                  <a className="font-semibold" href="">menu </a>
                  <a className="font-semibold" href="">private dining</a>
                  <a className="font-semibold" href="">reserve</a>
                  <a className="font-semibold" href="">los angeles gift card</a>
                  <a className="font-semibold" href="">inkind dining credit bonus</a>
                </div>
              </div>
              <div className='w-[80%] flex flex-row'>
                <div className=' flex flex-col flex-start'>
                  <a className="font-semibold" href="">join our team</a>
                  <a className="font-semibold" href="">press inquiries</a>
                  <div className='flex flex-row mt-1 text-start '>
                    <SlSocialInstagram className="h-5 w-5" />
                    <LiaFacebookSquare className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom area of the footer */}
        <div className="flex justify-between pt-[100px]">
            <div className="gap-row-[3rem] gap-rol-[3rem] justify-center">
              <a>site map</a>
              <a>website accessibility</a>
              <a>privacy policy</a>
            </div>
          <div className="gap-y-[3rem] gap-x-[3rem] flex justify-center">
            <div className="">
               <p href="">
                  &copy; {new Date().getFullYear()}
                  <a className="underline">boka restaurant group</a>,  LLC. All rights Reserved
              </p>
            </div>
          </div>
       </div>
       </div>
        
      
         
    </div>
  )
}

export default Footer