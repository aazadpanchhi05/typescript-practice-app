import React, { ReactElement, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import Button from '../../Atoms/Button'
import { FormTitle } from '../../Atoms/FormTitle'
import Alert from '../../Atoms/Alert'
import { FormCard } from './FormCard'

import { Data } from '../../config/data'

export default function LoginForm(): ReactElement {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const history = useHistory()

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onClick = () => {
    setError('')

    Data.forEach((x) => {
      if (email === x.email && password === x.password) {
        history.push('/')

        localStorage.setItem('userInfo', JSON.stringify(x))
      } else if (email === '' || password === '') {
        setError('All field required')
      } else {
        setError('Email or Password is wrong!')
      }
    })
  }

  const classes = {
    lable: 'block text-sm font-bold mb-2 mt-3 text-gray-700',
    inputField:
      'mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-indigo-500 ',
    p: 'mt-5 text-sm font-medium',
    link: 'text-indigo-500 hover:text-gray-900',
  }

  return (
    <>
      <FormTitle text="Login" />
      <FormCard>
        <form className="bg-white rounded">
          {error.length > 0 && <Alert error={error} />}

          <label className={classes.lable}>Email</label>
          <input
            className={classes.inputField}
            id="email"
            type="email"
            value={email}
            onChange={emailChange}
          />

          <label className={classes.lable}>Password</label>
          <input
            className={classes.inputField}
            id="password"
            type="password"
            value={password}
            onChange={passwordChange}
          />

          <Button text="Login" onclick={onClick} />
        </form>

        <div className={classes.p}>
          You don't have account ?{' '}
          <Link to="/signup" className={classes.link}>
            Register
          </Link>
        </div>
      </FormCard>
    </>
  )
}
