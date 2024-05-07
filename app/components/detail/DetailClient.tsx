"use client"

import Button from '@/app/shared/general/Button'
import Counter from '@/app/shared/general/Counter'
import ProductImage from '@/app/shared/general/ProductImage'
import SelectImage from '@/app/shared/general/SelectImage'
import useCart from '@/hooks/useCart'
import { Rating } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'

export interface IImages {
    color: string
    colorCode: string
    image: string
}

export interface CardProductProps {
    id: string
    name: string
    description: string
    price: number
    brand: string
    category: string
    inStock: boolean
    images: IImages[]
    selectedImage: IImages
    quantity: number
}

const DetailClient = ({ product }: { product: any }) => {

    const [cardProduct, setCardProduct] = useState<CardProductProps>({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        brand: product.brand,
        category: product.category,
        inStock: product.inStock,
        images: product.images,
        selectedImage: {
            color: product.images[0].color,
            colorCode: product.images[0].colorCode,
            image: product.images[0].image
        },
        quantity: 1
    })

    const [openMenu, setOpenMenu] = useState(false)

    const { addToBasket, cartPrdcts } = useCart()

    useEffect(() => {
        if (cartPrdcts) {
            const existingItem = cartPrdcts.findIndex((item) => item.id == product.id)
            console.log(cartPrdcts, 'sa')
            setOpenMenu(false)
            console.log(existingItem)
            if (existingItem != -1) {
                setOpenMenu(prev => !prev)
            }
        }
    }, [cartPrdcts])

    const increaseFunc = () => {
        if (cardProduct.quantity == 10) return
        setCardProduct(prev => ({ ...prev, quantity: prev.quantity + 1 }))
    }

    const decreaseFunc = () => {
        if (cardProduct.quantity <= 1) return
        setCardProduct(prev => ({ ...prev, quantity: prev.quantity - 1 }))
    }

    const selectImage = useCallback((item: IImages) => {
        setCardProduct(prev => {
            return { ...prev, selectedImage: item }
        })
    }, [cardProduct.selectedImage.image])

    return (
        <div className='flex justify-center gap-10 py-10'>
            <div className='grid grid-cols-2 w-[500px] h-[500px] px-5 py-7'>
                <div className='flex flex-col items-center justify-center select-none'>
                    {
                        cardProduct.images.map((item, index) => (
                            <ProductImage key={index} selectImage={() => selectImage(item)} value={item.image} />
                        ))
                    }
                </div>
                <div className='relative h-full w-full'>
                    <SelectImage cardProduct={cardProduct} />
                </div>
            </div>
            <div className='w-1/2 py-7 space-y-2'>
                <div className='text-black font-bold text-lg'>
                    {cardProduct.name}
                </div>
                <div className='text-slate-700'>
                    {cardProduct.description}
                </div>
                <div>
                    <Rating readOnly value={3} />
                </div>
                <div className='text-orange-500 text-xl font-bold'>
                    {cardProduct.price} ₺
                </div>
                <Counter decreaseFunc={decreaseFunc} increaseFunc={increaseFunc} product={cardProduct} />
                {
                    openMenu ? <>
                        <Button text='Product already in basket' onClick={() => { }} outlined />


                    </> : <>
                        <Button text='Add to basket' onClick={() => addToBasket(cardProduct)} />
                    </>
                }
            </div>
        </div>
    )
}

export default DetailClient