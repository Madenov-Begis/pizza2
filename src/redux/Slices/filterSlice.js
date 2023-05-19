import { createSlice } from '@reduxjs/toolkit'

export const filteSlice = createSlice({
  name: 'filter',
  initialState: {
    activeCat: 0,
    activeSort: {
      name: 'популярности',
      sortID: 'rating',
    }
  },
  reducers: {
    setActiveCat(state, action) {
      state.activeCat = action.payload;
    },
    setActiveSort(state, action) {
      state.activeSort = action.payload 
    }
  },
})


export const { setActiveCat, setActiveSort } = filteSlice.actions

export default filteSlice.reducer 