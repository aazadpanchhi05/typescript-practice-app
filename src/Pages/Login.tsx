import React, { ReactElement } from 'react'
import LoginForm from '../Components/LoginForm'

export default function SignUp(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <LoginForm />
    </div>
  )
}
