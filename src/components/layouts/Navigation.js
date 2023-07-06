import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navigation.module.css'
import { useContext } from 'react'
import FavouritesContext from '../../store/favourite-context'

function Navigation() {
  const favContext=useContext(FavouritesContext)
  return (
    <div className={classes.header}>
        <h1>Meetups</h1>
      <ul className={classes.pages}>
        
        <li><Link to='/' className={classes.list_items}>All Meetups</Link></li>
        <li><Link to='/favourites' className={classes.list_items}>Favourites <span>{favContext.totalFavourites}</span></Link></li>
        <li><Link to='/new-meetup' className={classes.list_items}>New Meetups</Link></li>
      </ul>
    </div>
  )
}

export default Navigation
