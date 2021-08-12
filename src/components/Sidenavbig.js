import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/dropdown.css'
function Sidenavbig() {
    return (
        <div className="navbar-div-big menu">
         
        
        <NavLink to="hcs/contact" className="navlink-big" >
        Home
        </NavLink>
        
         <NavLink to="hcs/contact" className="navlink-big" >
        About US
         </NavLink>
         <NavLink to="hcs/contact" className="navlink-big" >
        Certification
         </NavLink>
         <NavLink to="hcs/contact" className="navlink-big" >
        Trainings
         </NavLink>
          <div className="hcs-logo"><img src={logo} className="logostylebig"/></div>
         <NavLink to="hcs/contact" className="navlink-big" >
        Application
         </NavLink>
         <NavLink to="hcs/contact" className="navlink-big" >
        FAQ'S
         </NavLink>
         <NavLink to="hcs/contact" className="navlink-big" >
        Blog
         </NavLink>
         <NavLink to="hcs/contact" className="navlink-big">
        <div className="contact-btn">
        CONTACT US
        </div>
         </NavLink>
        
        </div>
    )
}

export default Sidenavbig