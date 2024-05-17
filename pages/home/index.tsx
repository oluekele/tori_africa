
import Holiday from '@/components/holiday'
import Slide from '@/components/libraries'
import DotSlide from '@/components/libraries/biographies'
import DotSlide2 from '@/components/libraries/books'
import DotSlide3 from '@/components/libraries/fiction'
import Mockup from '@/components/mockup'
import Product from '@/components/products.tsx'
import Services from '@/components/services'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      
      <div>
        <Mockup />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Product />
      </div>
      
      <div>
        <DotSlide />
      </div>
      <div>
        <DotSlide2 />
      </div>
      <div>
        <DotSlide3 />
      </div>
      <div>
        <Holiday />
      </div>
    </div>
  )
}

export default HomePage