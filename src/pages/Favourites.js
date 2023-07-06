import React from 'react'
import { useContext } from 'react'
import FavouritesContext from '../store/favourite-context'
import MeetupList from '../components/meetups/MeetupList'

function Favourites() {
  const favContext=useContext(FavouritesContext)
  const favourites=favContext.favourites
  return (
    <div>
      <h1>My favourites</h1>
      <MeetupList meetup={favourites}/>
      
    </div>
  )
}

export default Favourites
