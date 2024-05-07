import DetailClient from '@/app/components/detail/DetailClient'
import { products } from '@/utils/Products'
import React from 'react'

const Product = ({ params }: { params: any }) => {
    const { id } = params
    const product: any = products.find((product) => product.id == id)
    if (!product) return
    return (
        <DetailClient product={product} />
    )
}

export default Product