import { DispatchTypes, teacherObj } from '../types'

export interface ScheduleState {
  schedule: {
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
  }
}

const init = {
  schedule: {
    title: '',
    subject: {
      id: -1,
      name: '',
    },
    description: '',
    image: '',
    teachers: [],
    students: [],
    emailType: '',
    date: '',
    time: '',
    duration: 0,
    link: '',
    note: '',
  },
}

export const scheduleReducer = (
  state: ScheduleState = init,
  action: DispatchTypes
): ScheduleState => {
  switch (action.type) {
    case 'ADD_SCHEDULE':
      return {
        ...state,
        schedule: action.payload,
      }
    case 'REMOVE_SCHEDULE':
      return {
        schedule: action.payload,
      }
    default:
      return state
  }
}
