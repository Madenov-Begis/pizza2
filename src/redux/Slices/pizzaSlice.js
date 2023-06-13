import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async ({ category, activeSort, search, pageCount }) => {
    const { data } = await axios.get(
      `https://645cdff7250a246ae310e149.mockapi.io/pizzas?${category}&sortBy=${activeSort.sortID}${search}&page=${pageCount}&limit=3`
    )
    return data
  }
)

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizzas: [],
    status: '',
  },
  reducers: {
    setItems(state, action) {
      state.pizzas = action.payload
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.pizzas = []
      state.status = 'loading'
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.pizzas = action.payload
      state.status = 'ok'
    },
    [fetchPizzas.rejected]: (state) => {
      state.pizzas = []
      state.status = 'error'
    },
  },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
