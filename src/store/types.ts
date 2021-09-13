export const ADD_SCHEDULE = 'ADD_SCHEDULE'
export const REMOVE_SCHEDULE = 'REMOVE_SCHEDULE'

export interface schedulePayload {
  title: string
  subject: {
    id: number
    name: string
  }
  description: string
  image: string
}

export interface AddSchedule {
  type: typeof ADD_SCHEDULE
  payload: schedulePayload
}

export interface RemoveSchedule {
  type: typeof REMOVE_SCHEDULE
  payload: schedulePayload
}

export type DispatchTypes = AddSchedule | RemoveSchedule
