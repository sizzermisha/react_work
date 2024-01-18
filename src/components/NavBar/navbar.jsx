import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="nav">
        <div className="nav-logo-container">
            <img src="" alt="" className="nav-logo" />
        </div>

        <div className="nav-button-container">
            <NavLink to={"/dashboard"} className="nav-button-dashboard">Dashboard</NavLink>
            <NavLink to={"/messanger"} className="nav-button-dashboard">Messanger</NavLink>
            <NavLink to={"/marks"} className="nav-button-dashboard">Marks</NavLink>
            
        </div>
    </nav>
  )
}
