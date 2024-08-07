import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import FavouritesContext from '../../store/favourite-context'

function Navigation() {
  const favContext=useContext(FavouritesContext)
  return (
    <div className=' flex justify-between bg-black p-5 text-white'>
        <h1 className='text-3xl'>Meet Hubs</h1>
      <ul className='flex gap-x-3 px-10'>
        
        <li><Link to='/'>All Meetups</Link></li>
        <li><Link to='/favourites'>Favourites <span>{favContext.totalFavourites}</span></Link></li>
        <li><Link to='/new-meetup'>New Meetups</Link></li>
      </ul>
    </div>
  )
}

export default Navigation
