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
    },
    setFilters(state, action) {
      state.activeSort = action.payload.activeSort,
      state.activeCat = Number(action.payload.activeCat),
      state.pageCount = Number(action.payload.pageCount) 
    }
  },
})


export const { setActiveCat, setActiveSort, setPageCount, setFilters } = filteSlice.actions

export default filteSlice.reducer 