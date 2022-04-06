import React from 'react'
//import "./Navbar.scss"
import '../../styles/components/_menu.scss';
import { NavLink } from 'react-router-dom'
export default function Nabvar() {
  return (
    <div>
      
    
<nav className="c-navbar">
  
    <NavLink className="c-navbar--link" to="/characters" >Characters</NavLink>
    <NavLink className="c-navbar--link" to="/houses" >Houses</NavLink>
    <NavLink className="c-navbar--link" to="/timeline" >Timeline</NavLink>
   
   </nav>

   </div>
  )
}
