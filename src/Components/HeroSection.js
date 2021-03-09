import React, { useState } from 'react'
import Detail from './Detail'
import Navigation from './Navigation'
import "./HeroSection.css"

function HeroSection() {
    const [route, setRoute] = useState("")
    console.log(route)
    return (
        <div className="heroSection">
            <Navigation setRoute={setRoute}/>
            <Detail/>
        </div>
    )
}

export default HeroSection
