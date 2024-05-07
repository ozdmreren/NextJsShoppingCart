import React from 'react'

interface CounterProps {
    increaseFunc: () => void
    decreaseFunc: () => void
    product: any
}

const Counter: React.FC<CounterProps> = ({ increaseFunc, decreaseFunc, product }) => {

    const buttonStyle: string = "w-8 h-8 border rounded-md cursor-pointer select-none text-center"

    return (
        <div className='flex items-center gap-5'>
            <div className={buttonStyle} onClick={() => decreaseFunc()}>-</div>
            <div>{product.quantity}</div>
            <div className={buttonStyle} onClick={() => increaseFunc()}>+</div>
        </div>
    )
}

export default Counter