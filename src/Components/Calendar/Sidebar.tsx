import React from 'react'

import { RiHomeLine } from 'react-icons/ri'
import { AiOutlinePieChart } from 'react-icons/ai'
import { MdShowChart } from 'react-icons/md'
import {
  HiOutlineClipboardCheck,
  HiOutlineChatAlt2,
  HiPhoneIncoming,
} from 'react-icons/hi'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { GiHandBag, GiAstronautHelmet } from 'react-icons/gi'
import { GoPrimitiveDot } from 'react-icons/go'

import emoji from 'Images/memoji.png'
import { useHistory } from 'react-router'

export const Sidebar = () => {
  const history = useHistory()

  const clickHandler = () => {
    history.push('/')
  }

  const classes = {
    iconDiv:
      'hover:bg-defaultBlue-100 p-1 text-gray-400 hover:text-blue rounded-3xl text-xl',
    iconActive: 'bg-defaultBlue-100 p-1 rounded-3xl text-xl text-blue',
  }

  return (
    <div className="flex flex-col fixed h-screen justify-between">
      <div className="space-y-5">
        <div className={classes.iconDiv} onClick={clickHandler}>
          <RiHomeLine />
        </div>
        <div className={classes.iconDiv}>
          <AiOutlinePieChart />
        </div>
        <div className={classes.iconDiv}>
          <MdShowChart />
        </div>
        <div className={classes.iconActive}>
          <HiOutlineClipboardCheck />
        </div>
        <div className={classes.iconDiv}>
          <IoDocumentTextOutline />
        </div>
        <div className={classes.iconDiv}>
          <GiHandBag />
        </div>
        <div className={classes.iconDiv}>
          <HiOutlineChatAlt2 />
        </div>
      </div>
      <div className="pb-10 space-y-5">
        <div className={classes.iconDiv}>
          <HiPhoneIncoming />
        </div>
        <div className={classes.iconDiv}>
          <GiAstronautHelmet />
        </div>
        <div className="bg-yellow-100 rounded-2xl relative">
          <img src={emoji} alt="Memoji" className="w-7 h-7 p-1" />
          <GoPrimitiveDot className="absolute text-green-500 -top-1 left-4 text-xs" />
        </div>
      </div>
    </div>
  )
}
