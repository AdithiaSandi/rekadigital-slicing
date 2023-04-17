import { configureStore } from '@reduxjs/toolkit'
import MobileReducer from './reducer/isMobile'

export default configureStore({
  reducer: {
    mobile: MobileReducer
  }
})
