import React from 'react'
import '../styles/refcard.css'


function RefCard(props) {
    return (
        <div className="ref-card">
           <img src={props.photo} alt="ref pic" className="ref-img-style"/>
        </div>
    )
}

export default RefCard
