import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './Slices/searchSlice'
import filterReducer from './Slices/filterSlice'
import cartSlice from './Slices/cartSlice'
import pizzaSlice from './Slices/pizzaSlice'

export default configureStore({
  reducer: {
    filter: filterReducer,
    search: searchSlice,
    cart: cartSlice,
    pizza: pizzaSlice,
  },
})
