import React from 'react'
import Sidenav from '../components/Sidenav'
import Sidenavbig from '../components/Sidenavbig'
import Slider from '../components/Slider'
import Tiles from '../components/Tiles'
// import SectionT from '../components/SectionT'
import SectionT2 from '../components/SectionT2'
import Recognitions from '../components/Recognitions'
import NewsCardSlider from '../components/CardSlider'
import ReferencesCardSlider from '../components/RefCardSlider'
import Location from '../components/Location';
import Footer from '../components/Footer'

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
      
        <Slider/>
        
        <Tiles/>
      

        {/* <SectionT/> */}
        <SectionT2/>


        <SectionHeading text="RECOGNITIONS" background={{backgroundColor:'paleGoldenRod'}}/>
        
        <Recognitions/>
        
<div style={{backgroundColor:'paleGoldenRod'}}>
        <SectionHeading text="NEWS" background={{backgroundColor:'paleGoldenRod'}}/>
        <NewsCardSlider/>
 </div>       
        {/* <OwlSlider/> */}


        
     
{/* 
        <SectionHeading text="REFERENCES" background={{backgroundColor:'paleGoldenRod'}}/>
        <div style={{backgroundColor:'paleGoldenRod'}}> */}
        <ReferencesCardSlider/>
        {/* </div> */}
      
        < Location/>
      
       
        <Footer/>

        </div>
    )
}

export default Homepage
