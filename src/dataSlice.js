import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'addData',
  initialState: {
    searchHistory: [
    ]
  },
  reducers: {
    addItem(state, { payload }) {
      state.searchHistory.push(payload)
    },
  },
})

export const { addItem } = dataSlice.actions

export default dataSlice.reducer