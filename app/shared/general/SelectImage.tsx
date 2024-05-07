import { CardProductProps } from '@/app/components/detail/DetailClient'
import Image from 'next/image'
import React from 'react'

const SelectImage = ({ cardProduct }: { cardProduct: CardProductProps }) => {
    return (
        <Image src={cardProduct.selectedImage.image} alt='' fill className='object-contain' />
    )
}

export default SelectImage