import Image from 'next/image'
import React from 'react'
import Payment from '@/public/assets/footer_img.png'
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import logo from '@/public/assets/logo.svg'

const Footer = () => {
  return (
    <div className='w-[100%] bg-black '>
      <div className='flex justify-between w-[90%] mx-auto py-10 text-[#fff]'>
        <div className='w-[20%] pr-10'>
          <h2 className='text-[18px] pb-10'>Contact Info</h2>
          <p className='text-gray-500'>
            1418 River Drive, Suite 35 Cottonhall, CA 9622
          </p>
          <p className='text-gray-500 py-10'>
            Monday – Friday: 9:00-20:00
            Saturday: 11:00 – 15:00
          </p>
          <p className='text-[#fff]'>contact@example.com</p>
        </div>
        <div className='w-[20%]'>
        <h2 className='text-[18px] pb-10'>Company</h2>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>About Us</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Delivery Information</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Privacy Policy</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Terms $ Conditions</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Contact Us</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Support Center</p>
        </div>
        <div className='w-[30%] border-x-[0.1px] flex items-center justify-center '>
          <div>
            <Image src={logo} width={100} height={100} alt='logo' className='mt-[-10px] mx-auto'/>
            <p className=' text-gray-600 pt-10 text-center text-[18px]'>Got Questions ? Call us 24/7!</p>
            <p className='text-[#f65d4e] py-5 text-[35px]'>
              +(84) - 1800 - 4635
            </p>
            <div className='flex items-center w-[50%] mx-auto gap-4 pt-5 text-[#fff]'>
              <FaFacebookF size={20} className='cursor-pointer hover:text-[#f65d4e] text-gray-600'/>
              <FaTwitter size={20} className='cursor-pointer hover:text-[#f65d4e] text-gray-600'/>
              <FaInstagramSquare size={20} className='cursor-pointer hover:text-[#f65d4e] text-gray-600'/>
              <FaTwitter size={20} className='cursor-pointer hover:text-[#f65d4e] text-gray-600'/>
              <FaPinterestP size={20} className='cursor-pointer hover:text-[#f65d4e] text-gray-600'/>
            </div>
          </div>
        </div>
        <div className='w-[20%] px-10'>
        <h2 className='text-[18px] pb-10'>Corporate</h2>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Become a Vendor</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Affiliate Program</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Privacy Policy</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Our Suppliers</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Accessibility</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Promotions</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Careers</p>
        </div>
        <div className='w-[20%] px-10'>
        <h2 className='text-[18px] pb-10'>Our Service</h2>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Help Center</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Return</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Product Recalls</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Accessibility</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Contact Us</p>
          <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Store Pickup</p>
        </div>
      </div>
      <div className='w-[100%] mx-auto py-10 border-t-[0.2px]'>
        <div className='flex items-center justify-between w-[90%] mx-auto'>
          <p className='flex items-center gap-2 text-[#fff]'>Copyright © {new Date().getFullYear()}  <span className='text-[#f65d4e]'>Bookory</span>. All rights reserved.</p>
          <div>
            <Image src={Payment} width={500} height={100} alt='payment' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer