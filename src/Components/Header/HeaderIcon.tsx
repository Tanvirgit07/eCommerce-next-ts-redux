import Link from 'next/link'
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'

function HeaderIcon() {
  return (
    <>
    <Link href="/favorite" className='text-3xl relative'>
    <MdFavoriteBorder />
    <span className='absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center'>0</span>
    </Link>

    <Link href="/favorite" className='text-3xl relative'>
    <BiShoppingBag />
    <span className='absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center'>0</span>
    </Link>
    </>
  )
}

export default HeaderIcon