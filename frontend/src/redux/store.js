import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers
import { cartReducer } from './reducers/cartReducers'
import {
  getProductsReducer,
  getProductDetailsReducer,
} from './reducers/productReducers'

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
})

const middleware = [thunk]

const store = configureStore(
  { reducer },
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
