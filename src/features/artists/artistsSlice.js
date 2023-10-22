import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const artistSlice = createSlice({
  name: 'artist',
  initialState: {
    nodes: []
  },
  reducers: {
    clearArtists: state => {
      state.nodes = []
    },
    keepArtist: (state, action) => {
      state.nodes = [action.payload]
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArtists.fulfilled, (state, action) => {
        state.nodes = action.payload
      })
      .addCase(fetchArtists.rejected, (state, action) => {
        state.error = action.payload
      })
  } 
})

export const fetchArtists = createAsyncThunk('search/addArtists', async (artist) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/artists/${artist}`)
  const artists = await response.json();
  
  return artists
})

// Action creators are generated for each case reducer function
export const { clearArtists, keepArtist } = artistSlice.actions

export default artistSlice.reducer
