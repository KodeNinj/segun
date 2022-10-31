import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  score: 0,
  questionPool: [],
  optionPool:[]
}

export const quizSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    goodscore: (state) => {
      state.score += 100
    },
    badscore: (state) => {
      state.score = state.score
    },
    calcScore: (state) =>{
      state.totalscore = state.score
    }
  },
})

// Action creators are generated for each case reducer function
export const { goodscore, badscore, calcScore } = quizSlice.actions

export default quizSlice.reducer