import React from 'react'

interface Props {
    children: React.ReactNode
}

export const FormCard = (props: Props) => {
    return (
        <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 border rounded border-gray-300'>
            {props.children}
        </div>
    )
}
