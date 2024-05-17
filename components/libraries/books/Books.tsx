
import bg1 from '@/public/assets/links_bg2.jpg'
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa";
import Data from '../data'
import { useState } from 'react';


const Books = ({handleClick}) => {

  return (
    <div className='mb-10 overflow-hidden'>
      <div className='flex items-center gap-6 w-[90%] mx-auto'>
        <h3 className='font-bold w-[250px] text-[20px]'>Children&apos;s Books</h3>
        <div id='line' className='w-[70%] h-[0.5px] bg-[#e6e6e6] '></div>
        <div className='w-[50px] flex items-center gap-2'>
          
          <div id='dot2' className='w-[6px] h-[6px] hover:bg-[#f65d4e] bg-[#e6e6e6] rounded-full cursor-pointer' onClick={()=>
            handleClick(-2, -250)
            }  ></div>
          <div id='dot3' onClick={()=> 
          handleClick(-1, -250)
          } className='w-[6px] h-[6px] hover:bg-[#f65d4e]  rounded-full cursor-pointer bg-[#e6e6e6]'></div>
          <div id='dot4' className='w-[16px] h-[6px] hover:bg-[#f65d4e]  rounded-full cursor-pointer bg-[#f65d4e]' onClick={()=>
            handleClick(0, 0)
            } ></div>
        </div>
      </div>
      <div className='w-[3000px] ml-[80px] mt-6 flex gap-3 overflow-hidden z-10 relative'>
        <div className='absolute left-[10px] z-10 '>
          <div className=" relative w-[500px] h-[500px] rounded-[16px] bg-[#fff]" id='bg_1' >
            <Image src={bg1} width={450} height={400} alt='bg-1' className='object-cover relative w-[450px] h-[400px] rounded-[16px]'/>
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
        
        <div className='w-[2000px] overflow-hidden flex ' id='myButton2'>
          {Data.map((item)=>(
            <>
              <div className=' px-3 border-r-[0.1px] border-[#00000015] w-[250px] overflow-hidden relative'>
                <div className='group w-[250] h-[280px] overflow-hidden relative rounded-xl'>
                  <img src={item.pic} width={250} height={280} alt='bg-1' className='object-cover z-[-1] w-[250px] h-[280px] mb-5'/>
                  <div className='absolute top-[25%] left-[70%] overflow-hidden translate-y-[250px]  group-hover:translate-y-[0] transition ease-in-out delay-100 duration-700'>
                    <div className='w-[50px] h-[50px] rounded-full bg-[#fff] flex items-center justify-center '>{item.heart}</div>
                    <div className='w-[50px] h-[50px] rounded-full bg-[#fff] flex items-center justify-center my-1'>{item.eye}</div>
                    <div className='w-[50px] h-[50px]  rounded-full bg-[#fff] flex items-center justify-center'>{item.box}</div>
                  </div> 
                </div>
                <span>{item.percent}</span>
                <h3 className='font-bold mb-2 px-2'>{item.name}</h3>
                <div className='flex items-center gap-2 mb-2 px-2'>
                  <div className='flex items-center text-[#FA8C17] '>
                  {item.fillIcons}
                  </div>
                  <p>5</p>
                </div>
                <p className='mb-2 text-[#00000059] px-2'>{item.owner}</p>
                <p className='text-[24px] text-[#f65d4e] px-2 flex items-center gap-4'>{item.price} <span className='text-[#0000004f] line-through'>{item.discount}</span></p>
              </div>
            </>
          ))}
        </div>
        
        
      </div>
    </div>
  )
}

export default Books