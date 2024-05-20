'use client'
import Link from 'next/link';
import { FaPhoneVolume } from "react-icons/fa6";
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import classNames from "classnames";
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const NavMenu = () => {
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
    <div>
      <div className='lg:flex items-center gap-4 '>
        {nav.map((link) =>(
          <>
            <div key={link.id} className='flex items-center gap-10 pb-2 lg:pb-0'>
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
        
        
      </div>
    </div>
  )
}

export default NavMenu
