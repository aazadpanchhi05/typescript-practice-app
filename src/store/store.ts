import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { scheduleReducer } from './reducers/scheduleReducers'

export const store = createStore(
  scheduleReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export type RootStore = ReturnType<typeof scheduleReducer>
