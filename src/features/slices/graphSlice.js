import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const graphSlice = createSlice({
  name: 'graph',
  initialState: {
    nodes: [
      {
        group: "artist",
        id: "0LcJLqbBmaGUft1e9Mm8HV",
        image: "https://i.scdn.co/image/ab6761610000e5eb6c6380e782ed89db8754cf2a",
        label: "ABBA"
      }
    ],
    edges: [],
    key: uuidv4(),
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
        console.log("fulfilled: ", action.payload)
        
        let artistsNodes = action.payload.map(artist => {
          return createArtistNode(artist)
        })

        state.nodes = artistsNodes
        state.key = uuidv4()
      })
      .addCase(fetchArtists.rejected, (state, action) => {
        state.error = action.payload
      })
  } 
})

// Async call to get all artists
export const fetchArtists = createAsyncThunk('search/addArtists', async (artist) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/artists/${artist}`)
  const artists = await response.json();
  
  return artists
})

function createArtistNode(artist) {
  return {
    id: artist.id, 
    group: 'artist',
    label: artist.name, 
    image: artist.images.length > 0 ? artist.images[artist.images.length - 1].url : "/MissingCover.png",
  }
}

// Action creators are generated for each case reducer function
export const { clearArtists, keepArtist } = graphSlice.actions

export default graphSlice.reducer
