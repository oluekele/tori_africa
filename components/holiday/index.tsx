import Image from 'next/image'
import React from 'react'
import BgImage from '@/public/assets/h8_bg_1.jpg'
import Link from 'next/link'
import { FaAngleRight } from "react-icons/fa";

const Holiday = () => {
  return (
    <div className='w-100% lg:h-[600px] h-[350px] relative my-10 flex items-center justify-center'>
      <Image src={BgImage} alt='background' width={1600} height={100} className='w-full  h-full object-cover  absolute top-0 '/>
      <div className='z-10 w-[500px] flex-col items-center justify-center'>
        <h2 className='text-[#f65d4e] font-bold text-[20px] mt-10 text-center'>THE BOOKSORY STORE</h2>
        <h2 className='font-bold text-[40px] mt-5 mb-10 text-center'>Holiday Gift Guide</h2>
        <p className='text-[#000000ad] text-center'>Find the perfect gift for everyone on your list</p>
        <div className='w-full flex items-center justify-center'>
          <button className=' w-[170px] py-3 rounded-full bg-[#fff] flex items-center justify-center my-10'>
            <Link href='/'className='flex items-center gap-2 ' >
              Discover Now 
              <FaAngleRight className='text-[#f65d4e]'/>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Holiday