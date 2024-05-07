import React from 'react'
import Logo from './Logo'
import Search from './Search'
import CartCount from './CartCount'
import Avatar from './Avatar'

const Navbar = () => {
    return (
        <div className='
        flex items-center 
        gap-5 px-4 py-6
        bg-orange-500
        '>
            <Logo />
            <Search />
            <CartCount />
            <Avatar />
        </div>
    )
}

export default Navbar