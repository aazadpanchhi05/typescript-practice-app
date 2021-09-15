import React, { useEffect, useState } from 'react'
import { Step1 } from 'Components/Steps/Step1'
import { Step2 } from 'Components/Steps/Step2'
import { Step3 } from 'Components/Steps/Step3'
import { Success } from 'Components/Steps/Success'
import { useHistory } from 'react-router'
import isAuth from 'config/isAuth'

interface Props {}

export const ClassCreation = (props: Props) => {
  const [count, setCount] = useState(1)

  const history = useHistory()

  let auth = isAuth()

  useEffect(() => {
    if (!auth) {
      history.push('/login')
    }
  }, [auth, history])

  const nextPage = () => {
    setCount(count + 1)
  }

  const prevPage = () => {
    setCount(count - 1)
  }

  const resetPage = () => {
    setCount(1)
  }

  return (
    <div className="p-5">
      {count === 1 && <Step1 nextPage={nextPage} />}
      {count === 2 && <Step2 nextPage={nextPage} prevPage={prevPage} />}
      {count === 3 && <Step3 nextPage={nextPage} prevPage={prevPage} />}
      {count === 4 && <Success resetPage={resetPage} />}
    </div>
  )
}
