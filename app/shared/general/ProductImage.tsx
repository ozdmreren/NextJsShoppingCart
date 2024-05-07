import { IImages } from '@/app/components/detail/DetailClient'
import Image from 'next/image'
import React from 'react'

interface ProductImageProps {
    value: any
    selectImage: (value: IImages) => void
}

const ProductImage: React.FC<ProductImageProps> = ({ value, selectImage }) => {
    return (
        <div className='relative border px-3 py-4 mt-3 rounded-md cursor-pointer'>
            <Image src={value} alt='' width={50} height={50} onClick={() => selectImage(value)} />
        </div>
    )
}

export default ProductImage