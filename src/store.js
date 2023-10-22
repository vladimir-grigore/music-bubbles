import { configureStore } from '@reduxjs/toolkit'

import graphReducer from './features/slices/graphSlice'
import searchReducer from './features/search/searchSlice'


export default configureStore({
  reducer: {
    graph: graphReducer,
    search: searchReducer,
  }
})
