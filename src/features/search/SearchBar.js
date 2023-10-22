import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addValue } from './searchSlice'
import { fetchArtists } from '../artists/artistsSlice'

export function SearchBar() {
  const state = useSelector(state => state.search.value)
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    dispatch(addValue(event.target.value))
  };

  const handleKeyDown = (event) => {
    if(event.keyCode === 13) {
      dispatch(fetchArtists(event.target.value))
    }
  }

  return (
    <>
      <input value={state} onKeyDown={handleKeyDown} onChange={handleInputChange} />
    </>
  )
}
