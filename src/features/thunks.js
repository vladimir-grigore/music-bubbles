import { createAsyncThunk } from '@reduxjs/toolkit'

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

// Async call to get all tracks
export const fetchTracks = createAsyncThunk('search/addTracks', async (album_id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tracks/${album_id}`)
  const tracks = await response.json();
  
  return { tracks: tracks, album_id: album_id }
})
