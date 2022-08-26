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

const cartItemsInLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : []

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
}

const store = configureStore(
  { reducer },
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
