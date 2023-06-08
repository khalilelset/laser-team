import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
        <Link to="/" >home</Link>
        <Link to="/signup" >signin</Link>
          </div>
  )
}

export default NavBar
