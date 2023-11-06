import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addValue } from "../slices/searchSlice"
import { clearArtists } from "../slices/graphSlice"
import { fetchArtists } from "../thunks"
import { CssTextField } from "../styledComponents"

import styles from "../styles"

export function SearchBar() {
  const state = useSelector(state => state.search.value)

  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    dispatch(addValue(event.target.value))
  };

  const handleKeyDown = (event) => {
    if(event.keyCode === 13) {
      dispatch(clearArtists())
      dispatch(fetchArtists(event.target.value))
    }
  }

  return (
    <div style={styles.searchContainer}>
      <CssTextField 
        id="searchBar" 
        label="Enter band name" 
        variant="outlined" 
        value={state} 
        onKeyDown={handleKeyDown} 
        onChange={handleInputChange}
        size="small"
        style={styles.searchBar}
        InputLabelProps={{style: {color : "aqua"} }}
      />

      <div style={styles.helperText}>
        <div>Enter an artist name and hit Enter</div>
        <div>A number of artists will be displayed using the Spotify API</div>
        <div>Clicking on an artist image will display their albums</div>
        <div>Clicking on an album image will display the songs</div>
      </div>
    </div>
  )
}
