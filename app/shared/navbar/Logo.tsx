"use client"


import { useRouter } from 'next/navigation'
import React from 'react'

const Logo = () => {
    const router = useRouter()
    return (
        <div className='
        flex justify-center
        cursor-pointer
        py-4 px-3
        select-none
        rounded-md
        bg-orange-600
        text-slate-100
        ' onClick={() => router.push('/')}>
            <div className='flex items-center justify-center gap-2'>
                <h1 className='text-xl'>LOGO</h1>
                <span className='text-sm'>bilmemNe.com</span>
            </div>
        </div>
    )
}

export default Logo