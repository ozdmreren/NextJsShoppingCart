"use client"

import TextClip from '@/utils/TextClip'
import { Rating } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ProductCartProps {
    product: any
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`/product/${product.id}`)} className="cursor-pointer flex flex-col flex-1 shadow-lg p-2 rounded-md">
            <div className="relative h-[150px]">
                <Image src={product.images[0].image} fill alt="" className="object-contain" />
            </div>
            <div className="text-center mt-2 space-y-1">
                <div>{TextClip(product.name)}</div>
                <Rating name="read-only" value={2} readOnly />
                <div className="text-orange-600 font-bold text-lg md:text-xl">{product.price} ₺</div>
            </div>
        </div>
    )
}

export default ProductCart