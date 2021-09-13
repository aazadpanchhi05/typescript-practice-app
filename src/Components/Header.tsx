import React from 'react'
import { useHistory } from 'react-router-dom'

export const Header = () => {
  const history = useHistory()

  const logoutHandler = () => {
    localStorage.clear()
    history.push('/login')
  }

  const classes = {
    nav: 'flex items-center justify-between flex-wrap bg-teal-500 p-6',
    navLink:
      'block mt-4 lg:inline-block  lg:mt-0 text-gray-200 hover:text-yellow-300 mr-4',
    navActive: 'block mt-4 lg:inline-block  lg:mt-0 text-yellow-300 mr-4',
    logo: 'font-semibold text-white ml-10 text-xl tracking-tight',
    button:
      'inline-block text-sm mr-10 px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4 lg:mt-0',
  }

  return (
    <div className=" bg-gray-100">
      <nav className={classes.nav}>
        {/* <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
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
