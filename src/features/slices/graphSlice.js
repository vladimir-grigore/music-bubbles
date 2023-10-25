import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import initialState from '../initialState'

export const graphSlice = createSlice({
  name: 'graph',
  initialState: initialState,
  reducers: {
    clearArtists: state => {
      state.nodes = []
    },
    keepArtist: (state, action) => {
      let artistNode = discardArtists(state.nodes, action.payload)
      state.nodes = artistNode
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArtists.fulfilled, (state, action) => {
        let artistsNodes = action.payload.map(artist => {
          return createArtistNode(artist)
        })

        state.nodes = artistsNodes
      })
      .addCase(fetchArtists.rejected, (state, action) => {
        state.error = action.payload
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        let albums = action.payload

        let albumsNodes = albums.albums.map(album => {
          return createAlbumNode(album)
        })

        let edges = createAlbumsEdges(albums.artist_id, albums.albums)

        state.edges = edges
        state.nodes = state.nodes.concat(...albumsNodes)
      
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
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

// Async call to get all albums
export const fetchAlbums = createAsyncThunk('search/addAlbums', async (artist_id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/albums/${artist_id}`)
  const albums = await response.json();
  
  return { albums: albums, artist_id: artist_id }
})

function discardArtists(nodes, artist_id) {
  var node = nodes.filter(node => { return node.id === artist_id })
  return node
}

function createArtistNode(artist) {
  return {
    id: artist.id, 
    group: artist.group,
    label: artist.label,
    image: artist.images.length > 0 ? artist.images[artist.images.length - 1].url : "/MissingCover.png",
  }
}

function createAlbumsEdges(artist_id, albums) {
  return albums.map(album => { return { id: album.id, from: artist_id, to: album.id } })
}

function createAlbumNode(album) {
  return {
    id: album.id, 
    group: album.group,
    label: album.label,
    image: album.images.length > 0 ? album.images[album.images.length - 1].url : "/MissingCover.png",
  }
}

// Action creators are generated for each case reducer function
export const { clearArtists, keepArtist } = graphSlice.actions

export default graphSlice.reducer
