import React, { useState } from 'react'
import Detail from './Detail'
import Navigation from './Navigation'
import "./HeroSection.css"

const HeroSection = () => {
    const [route, setRoute] = useState("")
    
    return (
        <div className="heroSection">
            <Navigation setRoute={setRoute}/>
            <Detail route={route}/>
        </div>
    )
}

export default HeroSection
