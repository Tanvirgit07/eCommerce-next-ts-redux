import React from 'react'
import PriceFormate from '../PriceFormate'
import { ProductType } from '../../../type'
interface Props{
  cart: ProductType[];
}

const CartSummery = ({cart}:Props) => {
  return (
    <div className='bg-gray-100 rounded-lg px-4 py-6 sm:p-10 lg:col-span-5 mt-10 lg:mt-0'>
      <p className='text-2xl'>Cart Summery</p>
      <div className='mt-5 flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <p className='text-xl'>Sub Total</p>
            <PriceFormate amount={100}/>
          </div>
      </div>

      <div className='mt-5 flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <p className='text-xl'>Discount</p>
            <PriceFormate amount={100}/>
          </div>
      </div>

      <div className='mt-5 flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <p className='text-xl'>Payable</p>
            <PriceFormate amount={100}/>
          </div>
      </div>

    </div>
  )
}

export default CartSummery