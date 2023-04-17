import { createSlice } from '@reduxjs/toolkit'

export const isMobile = createSlice({
  name: 'mobile',
  initialState: {
    isMobile: window.innerWidth >= 768 ? false : true,
  },
  reducers: {
    toggleMobile: (state, action) => {
      state.isMobile = action.payload
    }
  }
})

export const { toggleMobile } = isMobile.actions

export const selectMobile = (state) => state.mobile.isMobile

export default isMobile.reducer
