import React from 'react'
interface Props {
  text: string
  onclick: () => void
}

const Button = ({ text, onclick }: Props) => {
  const clickEvent = () => {
    onclick()
  }

  const classes =
    'w-full bg-indigo-800 hover:bg-indigo-500 text-white font-bold py-2 px-4 mt-4 rounded'

  return (
    <button className={classes} type="button" onClick={clickEvent}>
      {text}
    </button>
  )
}

export default Button
