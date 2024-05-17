import React from 'react'
import { LuDot } from "react-icons/lu";
import { FaAngleUp } from "react-icons/fa6";
import Link from 'next/link';
import './Drop.css'

const ShopDrop = () => {
  return (
    <div className='px-3 py-5 rounded bg-white flex gap-4 relative'>
      <div className='absolute top-[-20px] left-[10%]'>
        <LuDot className='text-[#f65d4e]'/>
        <FaAngleUp />
      </div>
      <div>
        <h2 className='text-gray-300 mb-10'>SHOP LIST</h2>
        <ul>
          <li>
            <Link href='/'>Shop - 4 Columns</Link>
          </li>
          <li>
            <Link href='/'>Shop - 5 Columns</Link>
          </li>
          <li>
            <Link href='/'>Shop - Sidebar</Link>
          </li>
          <li>
            <Link href='/'>Shop - List View</Link>
          </li>
          <li>
            <Link href='/'>Shop - Categories Style 01</Link>
          </li>
          <li>
            <Link href='/'>Shop - Categories Style 02</Link>
          </li>
        </ul>
      </div>
      <div>
      <h2 className='text-gray-300 mb-10'>PRODUCT</h2>
        <ul>
          <li>
            <Link href='/'>Boxed Style</Link>
          </li>
          <li>
            <Link href='/'>Full Style</Link>
          </li>
          <li>
            <Link href='/'>Product Sidebar</Link>
          </li>
          <li>
            <Link href='/'>Bought Together</Link>
          </li>
          <li>
            <Link href='/'>Product countdown</Link>
          </li>
          <li>
            <Link href='/'>Grouped Product</Link>
          </li>
        </ul>
      </div>
      <div className='bg'>
        
      </div>
    </div>
  )
}

export default ShopDrop