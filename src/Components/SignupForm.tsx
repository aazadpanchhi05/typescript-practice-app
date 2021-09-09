import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import Button from '../Atoms/Button'
import { FormTitle } from '../Atoms/FormTitle'
import { FormCard } from './Form/FormCard'
import Alert from '../Atoms/Alert'

import { Data } from '../config/data'

const SignupForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [error, setError] = useState('')

  const history = useHistory()

  const onClick = () => {
    const phoneRegex = /^\d{10}$/
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (
      email === '' ||
      password === '' ||
      confirmPassword === '' ||
      phone === '' ||
      firstName === '' ||
      lastName === ''
    ) {
      setError('All field require!')
    } else if (password !== confirmPassword) {
      setError('Password does not match!')
    } else if (!email.match(emailRegex)) {
      setError('Enter valid email!')
    } else if (!phone.match(phoneRegex)) {
      setError('Enter valid phone!')
    } else {
      const user = {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: Number(phone),
        password: password,
      }

      Data.push(user)

      history.push('/login')
    }
  }

  const classes = {
    lable: 'block text-sm font-bold mb-2 mt-3 text-gray-700',
    inputField:
      'mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus-outline focus:border-transparent',
    p: 'mt-5 text-sm font-medium',
    link: 'text-yellow-500 hover:text-gray-900',
    nameInputField:
      'w-full px-3 py-2 text-sm text-gray-700 border rounded shadow appearance-none focus-outline focus:border-transparent',
    nameLable: 'block mb-2 text-sm font-bold text-gray-700',
  }

  return (
    <>
      <FormTitle text="Sign Up" />

      <FormCard>
        <form className="bg-white rounded">
          {error.length > 0 && <Alert error={error} />}

          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className={classes.nameLable}>First Name</label>
              <input
                className={classes.nameInputField}
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="md:ml-2">
              <label className={classes.nameLable}>Last Name</label>
              <input
                className={classes.nameInputField}
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <label className={classes.lable}>Email</label>
          <input
            className={classes.inputField}
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className={classes.lable}>Phone</label>
          <input
            className={classes.inputField}
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label className={classes.lable}>Password</label>
          <input
            className={classes.inputField}
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className={classes.lable}>Confirm Password</label>
          <input
            className={classes.inputField}
            id="password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button text="Sign Up" onclick={onClick} />
        </form>

        <div className="mt-5 text-sm font-medium">
          You have account ?{' '}
          <Link to="/login" className="text-yellow-500 hover:text-gray-900">
            Login
          </Link>
        </div>
      </FormCard>
    </>
  )
}

export default SignupForm
