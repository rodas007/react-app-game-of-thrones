import React from 'react'
//import "./Navbar.scss"
import '../../styles/components/_menu.scss';
import { Link } from 'react-router-dom'
export default function Nabvar() {
  return (
    <div>
      
    
<nav className="c-navbar">
  
    <Link className="c-navbar--link" to="/characters" >Characters</Link>
    <Link className="c-navbar--link" to="/houses" >Houses</Link>
    <Link className="c-navbar--link" to="/timeline" >Timeline</Link>
   
   </nav>

   </div>
  )
}
