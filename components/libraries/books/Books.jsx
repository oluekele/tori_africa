'use client'
import bg1 from '@/public/assets/links_bg2.jpg'
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa";
import Data from '../data'
import { useState } from 'react';
import ContentSlide from '../ContentSlide';
import MediumContent from '../MediumContent';
import BigContent from '../BigContent';


const Books = () => {
  

  const title = 'Children&apos;s Books'

  return (
    <div className='mb-10 overflow-hidden'>
      <div className='flex items-center gap-6 md:w-[90%] w-[95%] mx-auto'>
        
      </div>
      <div className=' md:h-[450px] md:ml-[60px] pt-10 md:flex ml-[20px] gap-3 overflow-hidden z-10 relative'>
        <div className='md:absolute z-10 '>
          <div className=" relative lg:w-[450px] md:w-[340px] w-[95%] sm:mx-auto h-[500px]  bg-[#fff] flex justify-center" id='bg_1' >
            <Image src={bg1} width={450} height={400} alt='bg-1' className='object-cover relative lg:w-[450px] md:w-[340px] w-[100%] h-[400px] rounded-[16px]'/>
            <div className='absolute top-[10%] left-[10%]'>
              <ul className=''>
                <li className='hover:text-[#f65d4e] font-medium my-2 cursor-pointer'>
                  Action & Adventure
                </li>
                <li className='hover:text-[#f65d4e] font-medium cursor-pointer'>
                  Children&apos;s Animal Books
                </li>
                <li className='hover:text-[#f65d4e] font-medium my-2 cursor-pointer'>
                Children&apos;s Humor
                </li>
                <li className='hover:text-[#f65d4e] font-medium cursor-pointer'>
                  Sci-Fi & Fantasy Books
                </li>
                <li className='hover:text-[#f65d4e] font-medium my-2 cursor-pointer'>
                  Classic Children&apos;s Books
                </li>
              </ul>
              <button className='flex items-center gap-3 font-bold mt-[80px]'>View More <FaAngleRight className='text-[#f65d4e] '/></button>
            </div>
          </div>
        </div>
        <div className=' md:hidden'>
          <ContentSlide title={title}/>
        </div>
        <div className='hidden md:flex lg:hidden'>
          <MediumContent title={title}/>
        </div>
        <div className='hidden md:hidden lg:flex'>
          <BigContent title={title}/>
        </div>

      </div>
    </div>
  )
}

export default Books