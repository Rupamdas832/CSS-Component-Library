import React from 'react'
import "./Heading.css"

const Heading = ({title}) => {
    return (
        <div className="componentHeading">
            <h1>{title}</h1>
        </div>
    )
}

export default Heading
