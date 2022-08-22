import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
  cart: cartReducer,
})

const middleware = [thunk]

const store = configureStore(
  { reducer },
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
