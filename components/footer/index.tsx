import Image from 'next/image'
import React from 'react'
import Payment from '@/public/assets/footer_img.png'
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import logo from '@/public/assets/logo.svg'

const Footer = () => {
  return (
    <div className='w-[100%] bg-[#282828] '>
      <div className='lg:flex justify-between lg:w-[90%] lg:mx-auto py-10 text-[#fff] mx-10'>
        <div className='flex flex-wrap justify-between md:w-[90%] w-full px-4 lg:w-[40%] '>
          <div className='w-[50%] pr-10 lg:text-[16px] md:text-[14px] text-[12px]'>
            <h2 className='md:text-[18px] text-[14px] lg:pb-10 pb-5'>Contact Info</h2>
            <p className='text-gray-500 '>
              1418 River Drive, Suite 35 Cottonhall, CA 9622
            </p>
            <p className='text-gray-500 py-5 lg:py-10 w-[80%]'>
              Monday – Friday: 9:00-20:00
              Saturday: 11:00 – 15:00
            </p>
            <p className='text-[#fff]'>contact@example.com</p>
          </div>
          <div className='w-[50%] lg:text-[16px] text-[14px]'>
          <h2 className='text-[18px] lg:pb-10 pb-5'>Company</h2>
            <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>About Us</p>
            <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Delivery Information</p>
            <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Privacy Policy</p>
            <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Terms $ Conditions</p>
            <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Contact Us</p>
            <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Support Center</p>
          </div>
        </div>
        <div className='flex flex-wrap justify-between md:w-[90%] w-[100%] lg:w-[50%] md:mt-10 mt-5 lg:mt-0 mx-auto'>
          <div className='md:w-[40%] w-[100%] mx-auto lg:border-x-[0.1px] flex lg:justify-center mt-5 border-[#d3d0d036] mb-5 md:-0'>
            <div>
              <Image src={logo} width={100} height={100} alt='logo' className='mt-[-10px] lg:mx-auto'/>
              <p className=' text-gray-600 pt-4 lg:pt-10 text-center md:text-[16px] text-[14px] lg:text-[18px]'>Got Questions ? Call us 24/7!</p>
              <p className='text-[#f65d4e] py-3 lg:py-5 text-[25px] lg:text-[35px]'>
                +(84) - 1800 - 4635
              </p>
              <div className='flex text-[16px]  items-center lg:w-[50%] mx-auto gap-4 md:pt-5 text-[#fff]'>
                <FaFacebookF size={20} className='cursor-pointer hover:text-[#f65d4e] text-gray-600'/>
                <FaTwitter size={20} className='cursor-pointer hover:text-[#f65d4e] text-gray-600'/>
                <FaInstagramSquare size={20} className='cursor-pointer hover:text-[#f65d4e] text-gray-600'/>
                <FaTwitter size={20} className='cursor-pointer hover:text-[#f65d4e] text-gray-600'/>
                <FaPinterestP size={20} className='cursor-pointer hover:text-[#f65d4e] text-gray-600'/>
              </div>
            </div>
          </div>
          <div className=' flex  gap-2 md:w-[60%] w-[100%] mx-auto lg:text-[16px] text-[14px]'>
            <div className=' md:px-10 lg:text-[16px] text-[14px] '>
              <h2 className='text-[18px] pb-5 lg:pb-10'>Corporate</h2>
              <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Become a Vendor</p>
              <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Affiliate Program</p>
              <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Privacy Policy</p>
              <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Our Suppliers</p>
              <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Accessibility</p>
              <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Promotions</p>
              <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Careers</p>
            </div>
            <div className=' px-10 lg:text-[16px] text-[14px] '>
              <h2 className='text-[18px] lg:pb-10 pb-5'>Our Service</h2>
              <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Help Center</p>
              <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Return</p>
              <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Product Recalls</p>
              <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Accessibility</p>
              <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Contact Us</p>
              <p className='cursor-pointer hover:text-[#f65d4e] text-gray-500'>Store Pickup</p>
            </div>
          </div>
        </div>
       
      </div>
      <div className='w-[100%] mx-auto md:py-10 py-5 border-t-[0.1px] border-[#d3d0d036] lg:text-[16px] md:text-[14px] text-[12px] pb-4 md:pb-0'>
        <div className='flex items-center flex-wrap md:justify-between justify-center w-[90%] mx-auto'>
          <p className='flex items-center gap-2 text-[#fff]'>Copyright © {new Date().getFullYear()}  <span className='text-[#f65d4e]'>Bookory</span>. All rights reserved.</p>
          <div className='w-[50%]'>
            <Image src={Payment} width={500} height={100} alt='payment' className='w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer