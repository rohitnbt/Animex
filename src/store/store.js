import { configureStore } from '@reduxjs/toolkit'
import mobileSlice from './mobileSlice'


export const store = configureStore({
  reducer: {
    mobile: mobileSlice
  },
})