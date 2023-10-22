import { configureStore } from '@reduxjs/toolkit'

import artistReducer from './features/artists/artistsSlice'
import searchReducer from './features/search/searchSlice'


export default configureStore({
  reducer: {
    artist: artistReducer,
    search: searchReducer,
  }
})
