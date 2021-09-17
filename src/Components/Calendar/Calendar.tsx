import React from 'react'
import { FiCloudSnow } from 'react-icons/fi'

interface Props {}

export const Calendar = (props: Props) => {
  const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const date = []
  let count1 = 30
  let count2 = 1

  for (let i = -1; i <= 33; i++) {
    if (i <= 0) {
      date.push(count1)
      count1++
    } else if (i > 30) {
      date.push(count2)
      count2++
    } else {
      date.push(i)
    }
  }

  const classes = {
    list: {
      listBtn:
        'bg-blue shadow-md text-white rounded-md text-sm justify-center m-1 px-3 py-2',
      list: 'text-blue font-semibold text-sm pt-3',
    },
    weekDiv: 'grid grid-cols-7 mt-3 text-center rounded-t-md bg-blue-light',
    date: {
      div: 'border rounded-b-lg grid-cols-7 grid text-right bg-white',
      date: 'font-semibold p-5 border-t border-r w-26 h-32',
    },
    calendar: {
      weekRow: 'w-26 h-12 text-blue font-semibold pt-3',
      todoCard: 'lg:w-36 p-2 lg:h-14 rounded-md absolute ',
      todoH1: 'font-semibold text-sm',
      todoP: 'font-normal text-xs',
      card: 'bg-white divide-gray-200 p-5 relative',
    },
  }

  return (
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-10">
        <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg ">
          <div className={classes.calendar.card}>
            <div className="flex-row flex justify-between">
              <div className="bg-blue-light rounded-md">
                <ul className="flex flex-row list-none flex-wrap space-x-4">
                  <li className={classes.list.listBtn}>Month</li>
                  <li className={classes.list.list}>Week</li>
                  <li className={`${classes.list.list} pr-4`}>Day</li>
                </ul>
              </div>
              <div className="flex-row flex space-x-2 mt-1">
                <div className="text-right">
                  <h1 className="font-semibold text-base">08:20 PM</h1>
                  <p className="text-gray-400 text-xs ">
                    30.2°F in San Francisco
                  </p>
                </div>
                <div className="text-3xl text-blue mt-1">
                  <FiCloudSnow />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-base font-semibold">September 2021</h1>

              <div className={classes.weekDiv}>
                {week.map((day, index) => (
                  <div className={classes.calendar.weekRow} key={index}>
                    {day}
                  </div>
                ))}
              </div>
              <div className={classes.date.div}>
                {date &&
                  date.map((eachDay, index) => (
                    <div
                      className={
                        index < 2 || index > 31
                          ? `text-gray-300 ${classes.date.date}`
                          : `text-gray-500 ${classes.date.date}`
                      }
                      key={index}
                    >
                      {eachDay}
                    </div>
                  ))}
              </div>

              <div>
                <div
                  className={`${classes.calendar.todoCard} bg-green-100 top-52 right-32`}
                >
                  <h1 className={`${classes.calendar.todoH1} text-green-500 `}>
                    Visit Course
                  </h1>
                  <p className={`${classes.calendar.todoP} text-green-500`}>
                    10:00-11:00
                  </p>
                </div>
              </div>

              <div>
                <div
                  className={`${classes.calendar.todoCard} bg-blue-light top-80 mt-3 left-8`}
                >
                  <h1 className={`${classes.calendar.todoH1} text-blue`}>
                    Meeting
                  </h1>
                  <p className={`${classes.calendar.todoP} text-blue`}>
                    10:00-11:00
                  </p>
                </div>
              </div>

              <div>
                <div
                  className={`${classes.calendar.todoCard} bg-yellow-100 bottom-60 mb-14 left-40 `}
                >
                  <h1 className={`${classes.calendar.todoH1} text-yellow-500 `}>
                    Design New Pages
                  </h1>
                  <p className={`${classes.calendar.todoP} text-yellow-500`}>
                    10:00-11:00
                  </p>
                </div>
              </div>

              <div>
                <div
                  className={`${classes.calendar.todoCard} bg-blue-light bottom-60 mb-14 right-64 `}
                >
                  <h1 className={`${classes.calendar.todoH1} text-blue`}>
                    Meeting
                  </h1>
                  <p className={`${classes.calendar.todoP} text-blue`}>
                    10:00-11:00
                  </p>
                </div>
              </div>

              <div>
                <div
                  className={`${classes.calendar.todoCard} bg-gray-100 bottom-44 right-32 isolat`}
                >
                  <h1 className={` ${classes.calendar.todoH1} text-gray-500`}>
                    Type to add..
                  </h1>
                  <p className={`${classes.calendar.todoP} text-gray-500`}>
                    10:00-11:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
