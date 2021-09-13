import React from 'react'
import { useHistory } from 'react-router-dom'

export const Header = () => {
  const history = useHistory()

  const logoutHandler = () => {
    localStorage.clear()
    history.push('/login')
  }

  const classes = {
    navBar: 'flex items-center justify-between flex-wrap bg-teal-500 p-6',
    navDiv: 'w-full block flex-grow lg:flex lg:items-center lg:w-auto',
    button:
      'inline-block text-sm mr-10 px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4 lg:mt-0',
  }

  return (
    <div className=" bg-gray-100">
      <nav className={classes.navBar}>
        <div className={classes.navDiv}>
          <div className="text-md font-bold lg:flex-grow ml-4 ">Header</div>
          <div>
            <button className={classes.button} onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
