import React from 'react'
import '../styles/sechead.css'
function SectionHeading(props) {
    return (
        <div className="sec-head-wrap" style={props.background}>
            {props.text}
        </div>
    )
}

export default SectionHeading
