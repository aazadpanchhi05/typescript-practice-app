import React from 'react'
interface Props {
  text: string
  paragraph?: string
}

export const FormTitle = (props: Props) => {
  return (
    <div className="max-w-md w-full mx-auto flex flex-row justify-between">
      <div className="text-center font-medium text-2xl">{props.text}</div>
      <div className="text-center font-normal text-xl">{props.paragraph}</div>
    </div>
  )
}
