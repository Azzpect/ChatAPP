import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import socketSlice from './socket/socketSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    socket: socketSlice
  }
})

type User = {
    value: {
        userName: string,
        userId: string
    }
}
type Socket = {
    value: null
}

export type RootState = {
    user: User,
    socket: Socket
}