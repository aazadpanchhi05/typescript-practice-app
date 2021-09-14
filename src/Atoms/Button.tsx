import React from 'react'
interface Props {
  text: string
  onclick: () => void
  type?: string
}

const Button = ({ text, onclick, type }: Props) => {
  const clickEvent = () => {
    onclick()
  }

  const classes = {
    normal:
      'w-full bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 px-4 mt-4 rounded',
    danger:
      'w-full bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 mt-4 rounded',
  }
  return (
    <>
      {type === 'Danger' ? (
        <button className={classes.danger} type="button" onClick={clickEvent}>
          {text}
        </button>
      ) : (
        <button className={classes.normal} type="button" onClick={clickEvent}>
          {text}
        </button>
      )}
    </>
  )
}

export default Button
