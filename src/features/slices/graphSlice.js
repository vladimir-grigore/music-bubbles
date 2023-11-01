import { createSlice } from "@reduxjs/toolkit"
import initialState from "../initialState"

import { 
  findArtist, 
  findAlbum,
  createArtistNode,
  createAlbumNode,
  createTrackNode,
  discardTracks,
  createAlbumEdges,
  createTrackEdges
 } from "../supportingFunctions"

import { fetchArtists, fetchAlbums, fetchTracks } from "../thunks"

export const graphSlice = createSlice({
  name: "graph",
  initialState: initialState,
  reducers: {
    clearArtists: state => {
      state.nodes = []
    },
    expandAlbums: (state, action) => {
      let artist_id = action.payload
      let artist = findArtist(artist_id, state.nodes)
      
      artist["toggled"] = true

      state.nodes = [artist]
    },
    collapseAlbums: (state, action) => {
      let artist_id = action.payload
      let artist = findArtist(artist_id, state.nodes)

      artist["toggled"] = false

      state.nodes = [artist]
    },
    expandTracks: (state, action) => {
      let album_id = action.payload
      let album = findAlbum(album_id, state.nodes)
      
      album["toggled"] = true

      state.nodes[state.nodes.indexOf(album)] = album
    },
    collapseTracks: (state, action) => {
      let album_id = action.payload
      let album = findAlbum(album_id, state.nodes)

      album["toggled"] = false

      state.nodes[state.nodes.indexOf(album)] = album

      let nodes = discardTracks(state.nodes, state.edges, album_id)
      state.nodes = nodes
    },
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
        let albums = action.payload.albums
        let artist_id = action.payload.artist_id
        let albumNodes = albums.map(album => {
          return createAlbumNode(album)
        })
        let edgeNodes = createAlbumEdges(artist_id, albums)

        state.edges = state.edges.concat(...edgeNodes)
        state.nodes = state.nodes.concat(...albumNodes)
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.error = action.payload
      })
      .addCase(fetchTracks.fulfilled, (state, action) => {
        let tracks = action.payload.tracks
        let album_id = action.payload.album_id
        let trackNodes = tracks.map(album => {
          return createTrackNode(album)
        })
        let edgeNodes = createTrackEdges(album_id, tracks)

        state.edges = state.edges.concat(...edgeNodes)
        state.nodes = state.nodes.concat(...trackNodes)
      })
      .addCase(fetchTracks.rejected, (state, action) => {
        state.error = action.payload
      })
  } 
})

// Action creators are generated for each case reducer function
export const { 
  clearArtists, 
  toggleAlbums, 
  clearTracks, 
  toggleTracks, 
  expandAlbums, 
  collapseAlbums, 
  expandTracks, 
  collapseTracks 
} = graphSlice.actions

export default graphSlice.reducer
