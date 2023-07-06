import React from 'react'
import Navigation from './Navigation'


function Layout(props) {
  return (
    <>
    <Navigation/>
    <h3>Meet people in your area and enhance your network</h3>
    <main>{props.children}</main>
    </>
  )
}

export default Layout
