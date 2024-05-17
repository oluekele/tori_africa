'use client'
import Link from 'next/link';
import { FaPhoneVolume } from "react-icons/fa6";
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import classNames from "classnames";
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from 'next/navigation';


const Navbar = () => {
  const CurrentPath =  usePathname();
  const nav = [
    {id: 1, href: '/', text: 'Home',},
    {id: 2, href: '/shop', text: 'Shop', icon: <FaChevronDown size={10}/>},
    {id: 3, href: '/vendor', text: 'Vendor', icon: <FaChevronDown size={10}/>},
    {id: 4, href: '/pages', text: 'Pages', icon: <FaChevronDown size={10}/>},
    {id: 5, href: '/blogs', text: 'Blogs', icon: <FaChevronDown size={10}/>},
    {id: 6, href: '/contact', text: 'Contact', icon: <FaChevronDown size={10}/>},
  ]
  return (
    <nav className='flex items-center justify-between w-[100%] py-4 px-10 border-b-2 mb-0'>
      <div className='flex items-center gap-4'>
        <IoLocationOutline />
        <Link href='/' className='underline'>Find a Book Store</Link>
      </div>
      <div className='hidden lg:flex items-center gap-4 '>
        {nav.map((link) =>(
          <>
            <div key={link.id} className='flex items-center gap-10'>
              <Link href={link.href} className={classNames({
                'text-[#f65d4e] font-[700]': link.href === CurrentPath,
                'flex items-center gap-1 font-[700] relative': link.href !== CurrentPath,
                'hover:text-[#f65d4e]': true
              })}>
                {link.text}
                <span className='mt-1'>{link.icon}</span>
              </Link>
            </div>
          </>
        ))}
        {/* <div className='flex items-center gap-10'>
          <Link href='/' className='flex items-center gap-1 hover:text-[#f65d4e] font-[700] relative'>Home </Link>
          <Link href='/vendor' className='flex items-center gap-1 hover:text-[#f65d4e] font-[700] relative'>Vendor <span className='mt-1'><FaChevronDown size={10}/></span></Link>
          <Link href='/pages' className='flex items-center gap-1 hover:text-[#f65d4e] font-[700] relative'>Pages <span className='mt-1'><FaChevronDown size={10}/></span></Link>
          <Link href='/blogs' className='flex items-center gap-1 hover:text-[#f65d4e] font-[700] relative'>Blogs <span className='mt-1'><FaChevronDown size={10}/></span></Link>
          <Link href='/contact' className='flex items-center gap-1 hover:text-[#f65d4e] font-[700] relative'>Contact <span className='mt-1'><FaChevronDown size={10}/></span></Link>
        </div> */}
        
      </div>
      <div>
        <p className='flex items-center gap-3 text-[#f65d4e] font-[500]'><span className='text-black'><FaPhoneVolume /></span>+2349044524619</p>
      </div>
    </nav>
  )
}
export default Navbar
