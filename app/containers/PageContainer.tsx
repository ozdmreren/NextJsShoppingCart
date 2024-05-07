import React from 'react'

interface PageContainerProps {
    children: React.ReactNode
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
        <div className='
        max-w-[1920px]
        px-10
        '>
            {children}
        </div>
    )
}

export default PageContainer