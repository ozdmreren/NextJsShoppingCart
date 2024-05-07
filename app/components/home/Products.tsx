"use client"

import React from 'react'
import { products } from '@/utils/Products'
import ProductCart from './ProductCard'
import { usePathname, useSearchParams } from 'next/navigation'

const Products = () => {

    const searchParams = useSearchParams()

    const params = new URLSearchParams(searchParams)
    const query: any = params.get('query')
    const filteredItems = products.filter((product) => product.name.toLowerCase().includes(query))
    return (
        <div>
            <div className="grid grid-cols-5 gap-3 md:gap-10 px-3 md:px-10">
                {
                    filteredItems.length == 0 && query == null ?

                        products.map((item, index) => (
                            <ProductCart key={index} product={item} />
                        ))
                        :
                        filteredItems.map((item, index) => (
                            <ProductCart key={index} product={item} />
                        ))
                }
            </div>
        </div>

    )
}

export default Products