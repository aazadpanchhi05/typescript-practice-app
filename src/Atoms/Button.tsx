import React from 'react'

interface Props {
    text: string
}

export const Button = (props: Props) => {
    return (
        <button className='w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 mt-3 rounded' type='button'>
            {props.text}
        </button>
    )
}
