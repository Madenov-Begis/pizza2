import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
    },

    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload)
      if (findItem) {
        findItem.count--
      }
      if (findItem.count < 0) {
        findItem.count = 0
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
      const findItem = state.items.find((obj) => obj.id === action.payload)
      if (findItem) {
        console.log(findItem)
        findItem.count = 0
      }
    },
    clearItem(state, action) {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const { addItem, minusItem, removeItem, clearItem } = cartSlice.actions

export default cartSlice.reducer
