/////////  Click handlers  ////////////
export function isArtistClick(id, nodes) {
  let selectedNode = nodes.filter(node => { return node.id === id})
  return selectedNode[0].group === 'artist'
}

export function isAlbumClick(id, nodes) {
  let selectedNode = nodes.filter(node => { return node.id === id})
  return selectedNode[0].group === 'album'
}
///////////////////////////////////////

///////  Query functions  ////////
export function findArtist(id, nodes) {
  return nodes.find(node => node.id === id && node.group === 'artist')
}

export function findAlbum(id, nodes) {
  return nodes.find(node => node.id === id && node.group === 'album')
}
///////////////////////////////////

//////  Node/Edge creation functions  //////
export function createArtistNode(artist) {
  return {
    id: artist.id, 
    group: artist.group,
    label: artist.label,
    image: artist.images.length > 0 ? artist.images[artist.images.length - 1].url : "/MissingCover.png",
    toggled: false,
  }
}

export function createAlbumNode(album) {
  return {
    id: album.id, 
    group: album.group,
    label: album.label,
    image: album.images.length > 0 ? album.images[album.images.length - 1].url : "/MissingCover.png",
    toggled: false,
  }
}

export function createTrackNode(track) {
  return {
    id: track.id, 
    group: track.group,
    label: track.label,
    image: "/MissingCover.png",
  }
}

export function discardTracks(nodes, edges, album_id) {
  let trackIds = edges.filter(edge => edge.from === album_id).map(edge => edge.id)
  
  return nodes.filter(node => { return trackIds.indexOf(node.id) === -1 })
}

export function createAlbumEdges(artist_id, albums) {
  return albums.map(album => { return { id: album.id, from: artist_id, to: album.id } })
}

export function createTrackEdges(album_id, tracks) {
  return tracks.map(track => { return { id: track.id, from: album_id, to: track.id } })
}
////////////////////////////////////////
