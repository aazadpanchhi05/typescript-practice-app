import React from 'react'

import { BsThreeDots } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { FaBullhorn } from 'react-icons/fa'

interface Props {}

export const LeftOfCalendar = (props: Props) => {
  const classes = {
    cardDiv: 'bg-white p-3 rounded-xl space-y-1',
    cardTime: 'text-gray-400 font-semibold text-sm',
    cardDesc: 'text-gray-400 text-xs font-medium',
    cardTitle: 'text-base font-semibold',
    cardOptionBtn: 'text-base pr-3 text-gray-400',
    btn: 'bg-white py-2 text-sm shadow-md font-semibold rounded-md',
  }

  return (
    <>
      <div className=" flex justify-between px-10 py-2">
        <div className="text-gray-900">
          <h1 className="text-lg font-semibold">Lorem Ipsum</h1>
          <p className="text-xs text-gray-400">dolor sit amet</p>
        </div>
        <div className="pt-3 text-xl pr-3 text-gray-500">
          <BsThreeDots />
        </div>
      </div>

      <div className="px-10 pt-8 space-y-3">
        <div>
          <h1 className="text-gray-700 font-semibold text-2xl">
            Upcoming events
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            Don't miss scheduled events
          </p>
        </div>

        <div className={classes.cardDiv}>
          <div className="flex justify-between">
            <div className="flex">
              <GoPrimitiveDot className="mt-1 mr-1 text-blue" />
              <h1 className={classes.cardTime}>10:00-11:00</h1>
            </div>
            <div className={classes.cardOptionBtn}>
              <BsThreeDots />
            </div>
          </div>
          <h1 className={classes.cardTitle}>Meeting with client</h1>
          <p className={classes.cardDesc}>Tell How To Boost Website Trafic</p>
        </div>

        <div className={classes.cardDiv}>
          <div className="flex justify-between">
            <div className="flex">
              <GoPrimitiveDot className="mt-1 mr-1 text-yellow-500" />
              <h1 className={classes.cardTime}>05:40-13:20</h1>
            </div>
            <div className={classes.cardOptionBtn}>
              <BsThreeDots />
            </div>
          </div>
          <h1 className={classes.cardTitle}>Visit online courses</h1>
          <p className={classes.cardDesc}>Check updates about design course</p>
        </div>

        <div className={classes.cardDiv}>
          <div className="flex justify-between">
            <div className="flex">
              <GoPrimitiveDot className="mt-1 mr-1 text-green-500" />
              <h1 className={classes.cardTime}>09:00-13:00</h1>
            </div>
            <div className={classes.cardOptionBtn}>
              <BsThreeDots />
            </div>
          </div>
          <h1 className={classes.cardTitle}>Design new UI and check sales</h1>
          <p className={classes.cardDesc}>Tell How To Boost Website Trafic</p>
        </div>
      </div>

      <div className="pt-16 px-14">
        <div className="bg-white p-2 rounded-xl space-y-1">
          <div className="bg-defaultBlue-400 rounded-xl">
            <div className="p-4 flex space-x-2">
              <div className="bg-defaultBlue-300 p-3 rounded-3xl">
                <FaBullhorn className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-base text-white font-medium">
                  Conversion History
                </h1>
                <p className="text-xs text-white">Week to week perfomance</p>
              </div>
            </div>
            <div className="px-4 w-44 pb-3 text-center">
              <div className={classes.btn}>See More</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
