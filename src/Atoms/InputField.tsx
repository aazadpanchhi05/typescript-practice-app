import React from 'react'

interface Props {
    type: string,
    text: string
}

export const InputField = (props: Props) => {
    return (
        <>
            <label className="block text-sm font-bold mb-2 mt-3 text-gray-700">
                {props.text}
            </label>
            <input className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus-outline focus:border-transparent"
                id={props.type}
                type={props.type} />
        </>

    )
}
