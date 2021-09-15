import React from 'react'

interface Props {}

export const Loader = (props: Props) => {
  return (
    <div
      style={{ borderTopColor: 'transparent' }}
      className="w-16 h-16 border-4 border-indigo-500 border-solid rounded-full animate-spin"
    ></div>
  )
}
