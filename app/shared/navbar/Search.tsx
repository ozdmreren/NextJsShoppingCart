"use client"

import { products } from '@/utils/Products'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const Search = () => {

    const [query, setQuery] = useState('')
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const getFilteredItems = (query: string, items: any[]) => {
        const params = new URLSearchParams(searchParams)
        if (query) {
            params.set('query', query)
            //return items
        } else {
            params.delete('query')
        }
        router.replace(`${pathname}?${params.toString()}`)
        //return items.filter((product) => product.name.toLowerCase().includes(query))
    }
    const filteredItems = getFilteredItems(query, products)

    return (
        <div className='flex-1'>
            <input
                onChange={e => setQuery(e.target.value)}
                className='w-full px-3 py-2 outline-none border' type="text" />

            {/* <div>
                {
                    filteredItems.map((item, index) => (
                        <div key={index}>
                            <div>{item.name}</div>
                            <div>{item.brand}</div>
                        </div>
                    ))
                }
            </div> */}
        </div>
    )
}

export default Search