import React from 'react'
import './Product.css'
import Link from 'next/link';
import Image from 'next/image'
import BG1 from '@/public/assets/h8_cate1.jpg'
import BG2 from '@/public/assets/h8_cate2.jpg'
import BG3 from '@/public/assets/h8_cate3.jpg'
import BG4 from '@/public/assets/h8_cate4.jpg'
import BG5 from '@/public/assets/h8_cate5.jpg'
import BG6 from '@/public/assets/h8_cate6.jpg'

const Product = () => {
  return (
    <div className='flex flex-wrap gap-[20px] w-[90%] my-10 mx-auto'>
      <div className='lg:w-[550px] w-[350px] overflow-hidden rounded-[16px] relative h-[300px]'>
        <Link href='/' className='group'>
          <Image src={BG1} width={350} height={100} alt='fiction' className='w-full h-full group-hover:scale-[1.05] transition ease-in-out delay-50 duration-300'/>
          <div className='absolute top-[75%] left-[5%]'>
            <h2 className='font-bold text-[20px]  transition ease-in-out delay-50 duration-300 overflow-hidden   h3'>Fiction & Fantasy</h2>
            <p className='text-gray-600'>3 product</p>
          </div>
        </Link>
      </div>
      <div className='lg:w-[350px] w-[300px] overflow-hidden rounded-[16px] relative h-[300px]'>
        <Link href='/' className='group'>
          <Image src={BG2} width={300} height={100} alt='fiction' className='lg:w-[350px] w-[300px] h-[300px] group-hover:scale-[1.05] transition ease-in-out delay-50 duration-300'/>
          <div className='absolute top-[75%] left-[5%]'>
            <h2 className='font-bold text-[20px] transition ease-in-out delay-50 duration-300 overflow-hidden h3 '>History</h2>
              <p className='text-gray-600 h3'>2 product</p>
          </div>
        </Link>
      </div>
      <div className='lg:w-[450px] w-[300px] overflow-hidden rounded-[16px] relative h-[300px]'>
        <Link href='/' className='group'>
          <Image src={BG3} width={450} height={100} alt='fiction' className='w-[450px] h-[300px] group-hover:scale-[1.05] transition ease-in-out delay-50 duration-300'/>
          <div className='absolute top-[75%] left-[5%]'>
            <h2 className='font-bold text-[20px]  transition ease-in-out delay-50 duration-300 overflow-hidden  h3'>Mystery, Triller</h2>
            <p className='text-gray-600'>6 product</p>
          </div>
        </Link>
        
      </div>
      <div className='w-[350px] overflow-hidden rounded-[16px] relative h-[300px]'>
        <Link href='/' className='group'>
          <Image src={BG4} width={350} height={100} alt='fiction' className='w-[350px] h-[300px] group-hover:scale-[1.05] transition ease-in-out delay-50 duration-300'/>
          <div className='absolute top-[75%] left-[5%]'>
            <h2 className='font-bold text-[20px]  transition ease-in-out delay-50 duration-300 w- h3'>Romance</h2>
            <p className='text-gray-600'>3 product</p>
          </div>
        </Link>
        
      </div>
      <div className='lg:w-[550px] w-[350px] h-[300px] overflow-hidden rounded-[16px] relative'>
        <Link href='/' className='group'>
          <Image src={BG5} width={550} height={100} alt='fiction' className=' lg:w-[550px] w-[350px] group-hover:scale-[1.05] transition ease-in-out delay-50 duration-300 h-[300px]'/>
          <div className='absolute top-[75%] left-[5%]'>
            <h2 className='font-bold text-[20px]  transition ease-in-out delay-50 duration-300 overflow-hidden  h3'>Teen & Young Adult</h2>
            <p className='text-gray-600'>16 product</p>
          </div>
        </Link>
        
      </div>
      <div className='lg:w-[450px] w-[300px] h-[300px] overflow-hidden rounded-[16px] relative'>
        <Link href='/' className='group'>
          <Image src={BG6} width={450} height={100} alt='fiction' className=' lg:w-[450px] w-[300px] group-hover:scale-[1.05] transition ease-in-out delay-50 duration-300 h-[300px]'/>
          <div className='absolute top-[75%] left-[5%]'>
            <h2 className='font-bold text-[20px]  transition ease-in-out delay-50 duration-300 h3'>Religion</h2>
            <p className='text-gray-600'>18 product</p>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default Product