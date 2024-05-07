"use client"

import useCart from '@/hooks/useCart'
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdOutlineShoppingCart, MdShoppingCart } from 'react-icons/md'

const CartCount = () => {

    const { cartPrdcts } = useCart()

    const router = useRouter()

    return (
        <div
            onClick={() => router.push('/cart')}
            className='
        flex items-center justify-center 
        rounded-full  text-center
        cursor-pointer
        relative
         '>
            <div className='text-white'><MdOutlineShoppingCart size={30} /></div>
            <div className='absolute -top-3 -right-3'>{cartPrdcts ? cartPrdcts.length : 0}</div>
        </div>
    )
}

export default CartCount