import { createSlice } from '@reduxjs/toolkit'

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    value: '',
    dataImages: []
  },
  reducers: {
    handleInputChange: (state, action) => {
      state.value = action.payload
    },
    searchInputValue: (state, action) => {
      state.dataImages = action.payload.photos
    }
  }
})

// Action creators are generated for each case reducer function
export const { handleInputChange, searchInputValue } = inputSlice.actions
