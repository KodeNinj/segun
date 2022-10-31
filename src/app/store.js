import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Quiz/quizSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})