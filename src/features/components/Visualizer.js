import React from "react"
import Graph from "react-graph-vis"

import { useSelector, useDispatch } from "react-redux"

export function Visualizer() {
  const nodes = useSelector(state => state.graph.nodes)
  const edges = useSelector(state => state.graph.edges)
  const graphKey = useSelector(state => state.graph.key)
  
  let data = {
    nodes: nodes,
    edges: edges,
  }

  const options = {
    nodes: {
      shape: 'circularImage',
      borderWidth: 3,
      size: 45,
      shadow:{
        enabled: true,
        color: 'rgba(0,0,0,0.5)',
        size:5,
        x:4,
        y:4
      },
      font: {size: 12, color: 'gray', face: 'arial'},
    },
    edges: {
      color: { inherit: true },
      smooth: {
        enabled: true,
        type: 'curvedCCW',
        roundness: .05,
      }
    }
  }

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
      console.log("nodes: ", nodes)
      console.log("edges: ", edges)
    }
  };

  return (
    <Graph
      graph={data}
      key={graphKey}
      options={options}
      events={events}
      style={{ 'height': '1000px' }}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
}
