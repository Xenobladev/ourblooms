import i1 from '../assets/close.png'
import i2 from '../assets/hamburger.png'
import { NavLink } from "react-router"
import { useState } from 'react'
import '../styles/Navbar.css'

function Navbar (){
    const [isMenuOpen, setIsMenuOpen] = useState (false)
    function toggle(){
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <nav className = "navbar">
            <p className = "display1">Jannat</p>
            <div className = "nav_items">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <button className = "mobileItem" onClick = {toggle}>
                {isMenuOpen ? <img src = {i2} alt = "Menu Options" /> : <img src = {i1} alt = "Close" /> }
            </button>
            </div>
        </nav>
    )
}

export default Navbar