import React from 'react'
import { ProductType } from '../../type'

function AddToCart({product}: {product: ProductType}) {
  return (
    <button className='bg-transparent border border-sky-500 text-black rounded-full py-1.5 hover:bg-sky-600 hover:text-white duration-300 my-2'>

            Add To Cart
    </button>
  )
}

export default AddToCart