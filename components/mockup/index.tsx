import Image from 'next/image'
import React from 'react'
import './Mockup.css'
import { FaChevronRight } from "react-icons/fa6";
import LeftFlower from '@/public/assets/rev_home8_7.png'
import LeftDown from '@/public/assets/rev_home8_1.png'
import down from '@/public/assets/rev_home8_4.png'
import CenterFlower from '@/public/assets/rev_home8.png'
import CenterFlowerRight from '@/public/assets/rev_home8_2.png'
import vector from '@/public/assets/revslider_vector.png'
import bg from '@/public/assets/rev_bg.png'

const Mockup = () => {
  return (
    <div className='main'>
      <div className='flex items-center justify-between mx-auto w-[90%] lg:h-[650px;] h-[450px]'>
        <div>
          <Image src={bg} width={100} height={100} alt='down flower' className='bg'/>
        </div>
        <Image src={LeftFlower} width={100} height={100} alt='down flower' className='absolute top-0 md:left-[-25px] left-0 w-[50px]'/>
        <Image src={LeftDown} width={200} height={100} alt='down flower' className='absolute md:top-[80%] top-[85%] lg:top-[75%] left-[-10px] md:w-[120px] lg:w-[200px] w-[80px]'/>
        <Image src={down} width={100} height={100} alt='down flower' className='absolute md:top-[85%] top-[90%] lg:top-[77%] left-[35%] md:w-[50px] lg:w-[100px] w-[30px]'/>
        <div className='relative md:my-[50px] w-[45%]'>
          <Image src={CenterFlower} width={600} height={100} alt='down flower' className='z-10 '/>
          <Image src={CenterFlowerRight} width={100} height={100} alt='down flower' className='absolute top-[23%] left-[80%] lg:left-[74%] z-[-1] opacity-100 md:w-[50px] lg:w-[100px] w-[30px]'/>
        </div> 
        <div className='flex-col items-center justify-center w-[50%]'>
          <h2 className='font-bold lg:text-[16px] text-[#f4402f] text-center mb-10'>BEST BOOKSHELF IN TOWN</h2>
          <div className='text-center mb-10 relative'>
            <h2 className='font-bold md:text-[30px] lg:text-[55px]  lg:leading-[60px] w-[80%] text-center mx-auto mb-4 '>Fiction Classics for Fall & Winter Reading</h2>
            <Image src={vector} width={250} height={100} alt='down flower' className='absolute lg:top-[28%] md:top-[20%] top-[14%] left-[15%] z-[-1] opacity-100 md:w-[250px] w-[100px]'/>
        
            <p className='font-bold text-[16px] '>Limited Time Only. While Supplies Last!</p>
          </div>
          <div className='w-full flex items-center justify-center'>
            <button className='w-[150px] py-4 flex items-center justify-center gap-2 bg-[#fff] rounded-full cursor-pointer'>Shop Now <FaChevronRight size={15} className='text-[#f4402f]'/></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Mockup