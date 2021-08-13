import React from 'react'
import '../styles/sectionComponent.css'
function SectionComponent(props) {
    return (
        <div className="section-component">
        <div className="sec-heading">
            {props.heading}
        </div>
       
        <div className="line"></div>
       
        <div className="sec-para">
            {props.para}
        </div>
        </div>
    )
}

export default SectionComponent
