import React from 'react'

interface ButtonProps {
    text: string
    outlined?: boolean
    disabled?: boolean
    small?: boolean
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({ text, outlined, disabled, small, onClick }) => {
    return (
        <button onClick={onClick} disabled={disabled}
            className={`
            ${outlined ? "bg-white text-black" : "bg-black text-white"}
            ${small ? "w-[200px]" : "w-full"}
            text-center px-3 py-2 rounded-md shadow-lg
            `}>{text}</button>
    )
}

export default Button