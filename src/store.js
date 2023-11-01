import { configureStore } from "@reduxjs/toolkit"

import graphReducer from "./features/slices/graphSlice"
import searchReducer from "./features/slices/searchSlice"

export default configureStore({
  reducer: {
    graph: graphReducer,
    search: searchReducer,
  }
})
