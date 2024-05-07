"use client"

import React from 'react'
import useCart from '@/hooks/useCart'
import TextClip from '@/utils/TextClip'
import Image from 'next/image'
import Button from '@/app/shared/general/Button'
import { SlArrowLeft } from 'react-icons/sl'
import { useRouter } from 'next/navigation'
import Counter from '@/app/shared/general/Counter'

const CartClient = () => {
    const { cartPrdcts, deleteFromBasket, deleteBasket, addToBasketIncrease, addToBasketDecrease } = useCart()
    const totalPrice = cartPrdcts?.reduce((totalPrice, item) => (totalPrice += item.quantity * item.price), 0)
    const router = useRouter()
    if (cartPrdcts == null || cartPrdcts.length == 0) {
        return (
            <div className='text-center py-10 text-slate-500 text-xl'>
                <div>There is no such product</div>
                <div
                    onClick={() => router.push('/')}
                    className='flex items-center 
                justify-center gap-3 hover:underline 
                select-none'>
                    <SlArrowLeft size={20} /> Return shopping</div>
            </div>
        )
    }

    return (
        <div className='px-10 py-8'>
            <div className='flex items-center w-full'>
                <div className='w-1/5 text-center px-3 py-4'>Product Image</div>
                <div className='w-1/5 text-center px-3 py-4'>Product Name</div>
                <div className='w-1/5 text-center px-3 py-4'>Product Price</div>
                <div className='w-1/5 text-center px-3 py-4'>Product Quantity</div>
                <div className='w-1/5 text-center px-3 py-4'></div>
            </div>
            <div>
                {
                    cartPrdcts?.map((item, key) => (
                        <div key={key} className='flex items-center mt-4 py-2 '>
                            <div className='w-1/5 relative flex items-center justify-center'>
                                <Image className='object-contain' src={item.selectedImage.image} alt='' height={40} width={40} />
                            </div>
                            <div className='w-1/5 text-center'>{TextClip(item.name)}</div>
                            <div className='w-1/5 text-center'>{item.price}</div>
                            <div className='w-1/5 flex items-center justify-center'>
                                <Counter product={item} increaseFunc={() => addToBasketIncrease(item)} decreaseFunc={() => addToBasketDecrease(item)} />
                            </div>
                            <div className='w-1/5 text-center'>
                                <Button text='Delete' onClick={() => deleteFromBasket(item)} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center justify-between mt-10'>
                <div className='w-1/5'>
                    <Button text='Delete basket' onClick={() => deleteBasket()} />
                </div>
                <div className='w-1/5 text-center'>
                    TotalPrice : <span className='text-orange-500 text-lg'>{totalPrice ? totalPrice : 0} ₺</span>
                </div>
            </div>
        </div>
    )
}

export default CartClient