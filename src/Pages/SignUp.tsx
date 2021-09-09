import React, { ReactElement, useEffect } from 'react'
import { useHistory } from 'react-router'
import SignupForm from '../Components/SignupForm'
import isAuth from '../config/isAuth'

export default function SignUp(): ReactElement {
  const history = useHistory()

  let auth = isAuth()

  useEffect(() => {
    if (auth) {
      history.push('/')
    }
  }, [auth, history])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <SignupForm />
    </div>
  )
}
