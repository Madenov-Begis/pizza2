import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './Slices/searchSlice'
import  filterReducer  from './Slices/filterSlice'


export default configureStore({
  reducer: {
    filter: filterReducer,
    search: searchSlice,
  },
})