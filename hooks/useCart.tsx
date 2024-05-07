"use client"

import { CardProductProps } from '@/app/components/detail/DetailClient'
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface CartContextProps {
    productCartQty: number,
    cartPrdcts: CardProductProps[] | null,
    addToBasket: (product: CardProductProps) => void
    deleteFromBasket: (product: CardProductProps) => void
    deleteBasket: () => void
    addToBasketIncrease: (product: CardProductProps) => void
    addToBasketDecrease: (product: CardProductProps) => void
}

interface Props {
    [propName: string]: any
}

const CartContext = createContext<CartContextProps | null>(null)


export const CartContextProvider = (props: Props) => {

    const [productCartQty, setProductCartQty] = useState(0)
    const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null)

    useEffect(() => {
        const items: any = localStorage.getItem('NextCart')
        const convertedItems: CardProductProps[] | null = JSON.parse(items)
        setCartPrdcts(convertedItems)
    }, [])

    const addToBasket = useCallback((product: CardProductProps) => {
        toast.success('Product added to cart')
        setCartPrdcts(prev => {
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
            localStorage.setItem('NextCart', JSON.stringify(updatedCart))
            setProductCartQty(prev => prev + 1)
            return updatedCart
        })
    }, [cartPrdcts])

    const addToBasketIncrease = useCallback((product: CardProductProps) => {
        if (product.quantity < 100) {
            product.quantity -= 1
            setCartPrdcts(prev => {
                let existingItemIndex;
                let updatedCart;
                if (prev) {
                    updatedCart = [...prev]
                    existingItemIndex = updatedCart.findIndex((item) => item.id == product.id)
                    if (existingItemIndex != -1) {
                        updatedCart[existingItemIndex].quantity += 1
                        localStorage.setItem('NextCart', JSON.stringify(updatedCart))
                        return updatedCart
                    }
                }
                return prev
            })
        } else {
            toast.error('Cannot more than 100')
        }
    }, [cartPrdcts])

    const addToBasketDecrease = useCallback((product: CardProductProps) => {
        if (product.quantity > 1) {
            product.quantity += 1
            setCartPrdcts(prev => {
                let existingItemIndex;
                let updatedCart;
                if (prev) {
                    updatedCart = [...prev]
                    existingItemIndex = prev.findIndex((item) => item.id == product.id)
                    updatedCart[existingItemIndex].quantity -= 1
                    localStorage.setItem('NextCart', JSON.stringify(updatedCart))
                    return updatedCart
                }
                return prev
            })
        } else {
            toast.error('Cannot less than 1')
        }
    }, [cartPrdcts])

    const deleteFromBasket = useCallback((product: CardProductProps) => {
        toast.success("Product successfully deleted !")
        setCartPrdcts(prev => {
            let filteredProducts = prev
            if (prev) {
                filteredProducts = prev.filter((item) => item.id != product.id)
                localStorage.setItem('NextCart', JSON.stringify(filteredProducts))
                return filteredProducts
            }
            return prev
        })
    }, [cartPrdcts])

    const deleteBasket = useCallback(() => {
        toast.success('Basket successfully deleted !')
        setCartPrdcts(null)
        localStorage.setItem('NextCart', JSON.stringify(null))
    }, [])

    let value = {
        productCartQty,
        cartPrdcts,
        addToBasket,
        deleteFromBasket,
        deleteBasket,
        addToBasketIncrease,
        addToBasketDecrease
    }

    return (
        <CartContext.Provider value={value} {...props} />
    )
}


const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('Context IS NULL')
    }
    return context
}

export default useCart