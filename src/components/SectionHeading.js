import React from 'react'
import '../styles/sechead.css'
function SectionHeading(props) {
    return (
        <div className="sec-head-wrap">
            {props.text}
        </div>
    )
}

export default SectionHeading
