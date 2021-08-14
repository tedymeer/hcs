import React from 'react'
import Sidenav from '../components/Sidenav'
import Sidenavbig from '../components/Sidenavbig'
import Slider from '../components/Slider'
import Tiles from '../components/Tiles'
import SectionT from '../components/SectionT'
import OwlSlider from '../components/OwlSlider'


import '../styles/home.css'
import SectionHeading from '../components/SectionHeading'


function Homepage() {
    return (
        <div className="home-wrap">

        <div className="nav-parent-small" >
        <Sidenav/>
        </div>
        <div className="nav-parent-big">
        <Sidenavbig/>
        </div>
        <div>
        <Slider/>
        </div>
        
        <Tiles/>
      

        <SectionT/>

        <SectionHeading text="RECOGNITIONS"/>
        <OwlSlider/>
        
       

        </div>
    )
}

export default Homepage
