import { createSlice } from '@reduxjs/toolkit'

export const filteSlice = createSlice({
  name: 'filter',
  initialState: {
    activeCat: 0,
    activeSort: {
      name: 'популярности',
      sortID: 'rating',
    },
    pageCount: 1    
  },
  reducers: {
    setActiveCat(state, action) {
      state.activeCat = action.payload;
    },
    setActiveSort(state, action) {
      state.activeSort = action.payload 
    },
    setPageCount(state, action){
      state.pageCount = action.payload
    }
  },
})


export const { setActiveCat, setActiveSort, setPageCount } = filteSlice.actions

export default filteSlice.reducer 