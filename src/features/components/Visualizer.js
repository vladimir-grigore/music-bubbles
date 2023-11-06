import React from "react"
import Graph from "react-graph-vis"
import { v4 as uuidv4 } from "uuid"

import { 
  useSelector, 
  useDispatch,
} from "react-redux"

import {
  expandAlbums, 
  collapseAlbums, 
  expandTracks, 
  collapseTracks } from "../slices/graphSlice"

import { isArtistClick, isAlbumClick, findArtist, findAlbum } from "../supportingFunctions"

import { fetchAlbums, fetchTracks } from "../thunks"

export function Visualizer() {
  const stateNodes = useSelector(state => state.graph.nodes)
  const stateEdges = useSelector(state => state.graph.edges)
  const options = useSelector(state => state.graph.options)

  const dispatch = useDispatch()
  
  let data = {
    nodes: stateNodes,
    edges: stateEdges,
  }

  function handleArtistClick(id) {
    let artist = findArtist(id, stateNodes)
    
    if (artist["toggled"]) {
      dispatch(collapseAlbums(id))
    } else {          
      dispatch(expandAlbums(id))
      dispatch(fetchAlbums(id))
    }
  }

  function handleAlbumClick(id) {
    let album = findAlbum(id, stateNodes)

    if (album["toggled"]) {
      dispatch(collapseTracks(id))
    } else {          
      dispatch(expandTracks(id))
      dispatch(fetchTracks(id))
    }
  }

  const events = {
    click: function(event) {
      var { nodes } = event

      if (nodes[0] !== null && nodes[0] !== undefined) {
        if (isArtistClick(nodes[0], stateNodes)) {
          handleArtistClick(nodes[0])
        }

        if (isAlbumClick(nodes[0], stateNodes)) {
          handleAlbumClick(nodes[0])
        }
      }
    }
  }

  return (
    <Graph
      graph={data}
      key={uuidv4}
      options={options}
      events={events}
      style={{ "height": "1000px" }}
    />
  )
}
