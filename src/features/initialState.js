const initialState = {
  nodes: [],
  edges: [],
  options: {
    nodes: {
      shape: "circularImage",
      borderWidth: 3,
      size: 30,
      mass: 2,
      shadow:{
        enabled: true,
        color: "rgba(0,0,0,0.5)",
        size:5,
        x:4,
        y:4
      },
      font: "16px arial white",
    },
    edges: {
      color: { inherit: true },
      arrows: {
        to: {
          enabled: false
        }
      },
      smooth: {
        enabled: true,
        type: "curvedCCW",
        roundness: .05,
      }
    },
    physics: {
      maxVelocity: 25,
      minVelocity: .5,
    },
  }
}

export default initialState
