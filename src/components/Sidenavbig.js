import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/dropdown.css'
function Sidenavbig() {
    return (
        <div className="navbar-div-big menu">
          <div className="hcs-logo"><img src={logo} className="logostylebig"/></div>
        
        <NavLink to="hcs/contact" className="navlink-big" >
       
        <li class="dropdown dropdown-8">
        Home
      <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-8">
        <li class="dropdown_item-1">Item 1</li>
        <li class="dropdown_item-2">Item 2</li>
        <li class="dropdown_item-3">Item 3</li>
          <li class="dropdown_item-4">Item 4</li>
          <li class="dropdown_item-5">Item 5</li>
      </ul>
    </li>

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
         <NavLink to="hcs/contact" className="navlink-big" >
        Application
         </NavLink>
         <NavLink to="hcs/contact" className="navlink-big" >
        FAQ'S
         </NavLink>
         <NavLink to="hcs/contact" className="navlink-big" >
        Blog
         </NavLink>
         <NavLink to="hcs/contact" className="navlink-big" >
        Contact
         </NavLink>
        
        </div>
    )
}

export default Sidenavbig