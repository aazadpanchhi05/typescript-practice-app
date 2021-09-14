import { Dispatch } from 'redux'
import {
  ADD_SCHEDULE,
  DispatchTypes,
  REMOVE_SCHEDULE,
  teacherObj,
} from '../types'

export const addSchedule =
  (schedule: {
    title: string
    subject: {
      id: number
      name: string
    }
    description: string
    image: string
    teachers: teacherObj[]
    students: string[]
    emailType: string
    date: string
    time: string
    duration: number
    link: string
    note: string
  }) =>
  (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({
      type: ADD_SCHEDULE,
      payload: schedule,
    })
  }

export const removeSchedule =
  (schedule: {
    title: string
    subject: {
      id: number
      name: string
    }
    description: string
    image: string
    teachers: teacherObj[]
    students: string[]
    emailType: string
    date: string
    time: string
    duration: number
    link: string
    note: string
  }) =>
  (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({
      type: REMOVE_SCHEDULE,
      payload: schedule,
    })
  }
