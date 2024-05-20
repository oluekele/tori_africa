
import Holiday from '@/components/holiday'
import DotSlide from '@/components/libraries/biographies'
import Slide from '@/components/libraries/ContentSlide'
import DotSlide2 from '@/components/libraries/books'
import DotSlide3 from '@/components/libraries/fiction'
import Mockup from '@/components/mockup'
import Product from '@/components/products.tsx'
import Services from '@/components/services'
import React from 'react'
import Biographies from '@/components/libraries/biographies/Biographies'
import Books from '@/components/libraries/books/Books'
import Fiction from '@/components/libraries/fiction/Fiction'

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
      {/* <Slide /> */}
      {/* <div>
        <DotSlide />
      </div>
      <div>
        <DotSlide2 />
      </div>
      <div>
        <DotSlide3 />
      </div> */}
      <Biographies />
      <Books />
      <Fiction />
      <div>
        <Holiday />
      </div>
    </div>
  )
}

export default HomePage