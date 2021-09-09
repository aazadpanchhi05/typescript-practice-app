import React, { ReactElement, useEffect } from 'react'
import { useHistory } from 'react-router'
import isAuth from '../config/isAuth'

export default function Home(): ReactElement {
  const history = useHistory()

  let auth = isAuth()

  useEffect(() => {
    if (!auth) {
      history.push('/login')
    }
  }, [auth, history])

  return (
    <div className="container">
      <h1 className="text-center text-gray-700 text-4xl mt-5">Users</h1>
    </div>
  )
}
