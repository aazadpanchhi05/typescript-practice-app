import React, { ReactElement } from 'react'

import { Calendar as CalenderComp } from 'Components/Calendar/Calendar'
import { TopOfCalendar } from 'Components/Calendar/TopOfCalendar'
import { LeftOfCalendar } from 'Components/Calendar/LeftOfCalendar'
import { Sidebar } from 'Components/Calendar/Sidebar'

export default function Calendar(): ReactElement {
  const classes = {
    leftDiv: 'flex-shrink-0 min-h-screen w-2/6 ml-4',
    rightDiv: 'divide-y w-full divide-gray-200 space-y-3',
  }

  return (
    <div className="bg-gray-100 p-4 flex overflow-hidden">
      <Sidebar />
      <div className={classes.leftDiv}>
        <LeftOfCalendar />
      </div>
      <div className={classes.rightDiv}>
        <TopOfCalendar />
        <div className="pt-4">
          <CalenderComp />
        </div>
      </div>
    </div>
  )
}
