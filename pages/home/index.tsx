
import Holiday from '@/components/holiday'
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