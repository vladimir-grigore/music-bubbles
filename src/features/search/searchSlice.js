import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'serarch',
  initialState: {
    value: ''
  },
  reducers: {
    addValue: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addValue } = searchSlice.actions

export default searchSlice.reducer
