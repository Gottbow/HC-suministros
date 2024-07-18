import React from 'react'
import MenuCat from './MenuCat'
import ProductCatSec from './ProductCatSec'

export default function MenuWrapper () {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-MWD bg-white'>
        <MenuCat />
        <ProductCatSec />
    </div>
  )
}