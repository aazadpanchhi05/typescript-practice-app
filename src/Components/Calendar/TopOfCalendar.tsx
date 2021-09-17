import React from 'react'
import { MdDateRange, MdAddBox } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'

interface Props {}

export const TopOfCalendar = (props: Props) => {
  return (
    <div className="flex flex-row justify-between p-2">
      <div className="flex flex-row space-x-2">
        <div className="bg-white p-2 text-sm rounded-lg">
          <MdDateRange />
        </div>
        <div className="mt-1 text-sm font-semibold">Calendar</div>
      </div>

      <div className="flex flex-row space-x-2">
        <div className="bg-blue-light text-blue p-2 text-sm rounded-lg">
          <BsSearch />
        </div>
        <div className="bg-blue-light text-blue p-2 text-sm rounded-lg">
          <MdAddBox />
        </div>
      </div>
    </div>
  )
}
