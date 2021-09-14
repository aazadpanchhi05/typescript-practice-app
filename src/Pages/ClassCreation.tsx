import React, { useState } from 'react'
import { Step1 } from '../Components/Steps/Step1'
import { Step2 } from '../Components/Steps/Step2'
import { Step3 } from '../Components/Steps/Step3'

interface Props {}

export const ClassCreation = (props: Props) => {
  const [count, setCount] = useState(1)

  const nextPage = () => {
    setCount(count + 1)
  }

  const prevPage = () => {
    setCount(count - 1)
  }

  return (
    <div className="p-5">
      {count === 1 && <Step1 nextPage={nextPage} />}
      {count === 2 && <Step2 nextPage={nextPage} prevPage={prevPage} />}
      {count === 3 && <Step3 nextPage={nextPage} prevPage={prevPage} />}
    </div>
  )
}
