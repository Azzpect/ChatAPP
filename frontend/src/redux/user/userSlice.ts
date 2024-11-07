import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
        userName: "",
        userId: ""
    }
  },
  reducers: {
    changeUserId: (state, action) => {
        state.value.userId = action.payload;
    }
  }
})

export const { changeUserId } = userSlice.actions

export default userSlice.reducer