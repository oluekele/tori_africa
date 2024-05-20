'use client'
import Link from 'next/link';
import { FaPhoneVolume } from "react-icons/fa6";
import React, { useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import NavMenu from './NavMenu'
import { IoIosClose } from "react-icons/io";


 
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  

  return (
    <nav className='flex items-center justify-between w-[100%] py-4 md:px-10 px-4 border-b-2 mb-0'>
      <div className='flex flex-col lg:hidden items-center gap-[5px] rounded-xl w-30 cursor-pointer group relative' onClick={()=> setMenu(!menu) }>
        <div className='w-[20px] h-[1px] bg-[#0000009c] group-hover:bg-[#f65d4e]'></div>
        <div className='w-[20px] h-[1px] bg-[#0000009c] group-hover:w-[15px] group-hover:bg-[#f65d4e] group-hover:ml-[-5px]'></div>
        <div className='w-[20px] h-[1px] bg-[#0000009c] group-hover:bg-[#f65d4e]'></div>
        <div className={menu 
        ? 'fixed left-0 top-[55px] py-4 px-6 bg-[#fff] rounded-md z-[999]  transition ease-in-out delay-50 duration-300 w-[200px]'  
        : 'fixed top-[-100%] bg-[#fff]  transition ease-in-out delay-50 duration-300 z-[999] w-[200px]'}>
          <NavMenu />
          <IoIosClose size={30} className='absolute top-[8px] right-[10px] cursor-pointer text-[#00000083] hover:text-[#000000]' onClick={()=>setMenu(false)}/>
        </div>
        
      </div>
      <div className='flex items-center gap-4 text-[14px] md:text-[16px]'>
        <IoLocationOutline />
        <Link href='/' className='underline'>Find a Book Store</Link>
      </div>
      <div className='hidden lg:flex'>
        <NavMenu />
      </div>
      <div>
        <p className='flex items-center gap-3 text-[#f65d4e] font-[500] text-[14px] md:text-[16px]'><span className='text-black'><FaPhoneVolume /></span>+2349044524619</p>
      </div>
    </nav>
  )
}
export default Navbar
