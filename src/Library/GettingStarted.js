import React from 'react'
import "./GettingStarted.css"
import Heading from '../Components/Heading'

const GettingStarted = () => {
    return (
        <div>
            <Heading title="Getting Started"/>
            <h2>Installation</h2>
            <p>Inside <span>App.css</span> file in your React project import the following code</p>
            <pre>
                <code>
                {`
                @import "https://uishop.netlify.app/style.css"; 
                `} 
                </code>
            </pre>
            <p>Thats all! Now reuse different CSS Components without hard-coding the css part. Make sure to use the assigned <span>className</span> properly</p>
        </div>
    )
}

export default GettingStarted
