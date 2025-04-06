import React from 'react'
import { ProductType } from '../../type'
import PriceFormate from './PriceFormate';

function ProductPrice({item}:{item: ProductType}) {
    const regularPrice = item.price;
    const discountPrice = item?.price + item?.discountPercentage/100; 
  return (
    <div>
        <PriceFormate amount = {regularPrice}/>
        <PriceFormate amount = {discountPrice}/>
    </div>
  )
}

export default ProductPrice