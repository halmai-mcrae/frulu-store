import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  // reducers go here
})

const middleware = [thunk]

const store = configureStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
