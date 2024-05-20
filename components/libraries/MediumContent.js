'use client'
import React, { useEffect, useRef, useState } from 'react'
import './Library.css'
import Data from './data'


const delay = 2500;

const MediumContent = ({title}) => {
  
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null);
  
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Data.length -1 ? 0 : prevIndex + 1 
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className=''>
      <div className='absolute top-0 left-0 flex items-center gap-6 w-[90%] mx-auto'>
        <h3 className='font-bold w-[250px] text-[20px]'>{title}</h3>
        <div id='line' className='lg:w-[900px] md:w-[200px] h-[0.5px] bg-[#e6e6e6] '></div>
      </div>
      <div className="slideshow ">
      
        <div
          className="slideshowSlider flex md:ml-[330px] lg:ml-[450px] h-[420px]"
          style={{ transform: `translate3d(${-index * 47}%, 0, 0)` }}
        >
          {Data.map((item, index) => (
            <div
              className="slide"
              key={index}
              
            >
              <div className=' px-3 border-r-[0.1px] border-[#00000015] lg:w-[250px] md:w-[320px] w-[350px] overflow-hidden relative'>
                  <div className='group lg:w-[250px] md:w-[300px] w-[320px] h-[280px] overflow-hidden relative rounded-xl'>
                    <img src={item.pic} width={250} height={280} alt='bg-1' className='object-cover z-[-1] lg:w-[250px] md:w-[300px] w-[320px] h-[280px] mb-5'/>
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
            </div>
          ))}
        </div>

        <div className="slideshowDots lg:right-[-420px] lg:hidden md:left-[50%] left-[20%] md:flex">
          {Data.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot  ${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      
      
    </div>
    </div>
  );
}


export default MediumContent