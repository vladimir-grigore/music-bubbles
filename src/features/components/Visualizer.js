import React from "react"
import Graph from "react-graph-vis"

import { useSelector, useDispatch } from "react-redux"
import { fetchAlbums, keepArtist } from "../slices/graphSlice"
import { v4 as uuidv4 } from "uuid"

export function Visualizer() {
  const stateNodes = useSelector(state => state.graph.nodes)
  const stateEdges = useSelector(state => state.graph.edges)
  const options = useSelector(state => state.graph.options)

  const dispatch = useDispatch()
  
  let data = {
    nodes: stateNodes,
    edges: stateEdges,
  }

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
      if (nodes[0] !== null) {
        dispatch(keepArtist(nodes[0]))
        dispatch(fetchAlbums(nodes[0]))
      }
    }
  };

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
