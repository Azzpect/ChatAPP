import { createSlice } from '@reduxjs/toolkit'

export const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    value: null
  },
  reducers: {
    changeSocket: (state, action) => {
        state.value = action.payload;
    }
  }
})

export const { changeSocket } = socketSlice.actions

export default socketSlice.reducer