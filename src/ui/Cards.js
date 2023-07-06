import React from 'react'
import classes from './Cards.module.css'

function Cards(props) {
  return (
    <div className={classes.cards}>
        <div>{props.children}</div>
        
      
    </div>
  )
}

export default Cards
