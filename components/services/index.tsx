import React from 'react'
import { BsGiftFill } from "react-icons/bs";
import { FaTruckArrowRight } from "react-icons/fa6";
import { TbShoppingBagDiscount } from "react-icons/tb";
import { GiStrongbox } from "react-icons/gi";
import { BsFillBoxSeamFill } from "react-icons/bs";

const Services = () => {
  const service = [
    {id: 1, name: 'Best Prices & Offers', description: 'Orders $50 or more', icon: <BsGiftFill size={40}/>},
    {id: 2, name: 'Free Delivery', description: '24/7 amazing service', icon: <FaTruckArrowRight size={40}/>},
    {id: 3, name: 'Great Daily Deal', description: 'when you sign up', icon: <GiStrongbox size={40}/>},
    {id: 4, name: 'Wide Assortment', description: 'Mega Discounts', icon: <TbShoppingBagDiscount size={40}/>},
    {id: 5, name: 'Easy Returns', description: 'Within 30 days', icon: <BsFillBoxSeamFill size={40}/>},
  ]
  return (
    <div className='w-[100%]  mx-auto flex items-center gap-2  py-10 border-b-[0.3px] overflow-hidden flex-wrap'>
      {service.map((item)=>(
        <>
          <div key={item.id} className='mb-3 pl-10 flex  items-center gap-4'>
            <div className='flex w-full items-center gap-4 group '>
              <div className='bg-[#F65D4E;] w-[50px] h-[50px] rounded-full flex items-center justify-center p-2 text-[#fff] group-hover:scale-75 transition ease-in-out delay-50 duration-300'>
                {item.icon}
              </div>
              <div>
                <h2 className='font-bold text-[19px]'>
                  {item.name}
                </h2>
                <p className='text-[#999999]'>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
      
    </div>
  )
}

export default Services