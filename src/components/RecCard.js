import React from 'react'

function RecCard(props) {
    return (
        <div className="rec-card">

        <div className="pic-name-wrap">
           <div className="rec-pic">
        <img src={props.pic} alt="pic" className="rec-pic-style"/>
           </div>
           <div className="rec-name">
           {props.name}
           </div>
        </div>
           <div className="rec-caption">
           {props.caption}
           </div>
    </div>
    )
}

export default RecCard
