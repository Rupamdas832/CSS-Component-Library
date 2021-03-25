import React from 'react'
import "./GettingStarted.css"
import Heading from '../Components/Heading'

const GettingStarted = () => {
    return (
        <div>
            <Heading title="Getting Started"/>
            <h2>Installation</h2>
            <p>Add the following code within the <span>head</span> tag inside the <span>index.html</span> of your React project</p>
            <pre>
                <code>
                {`
                <link rel="stylesheet" href="https://uishop.netlify.app/style.css"/> 
                `} 
                </code>
            </pre>
            <p>Add the following code within the <span>script</span> tag inside the <span>index.html</span> of your project</p>
            <pre>
                <code>
                {`
                <script src="https://uishop.netlify.app/app.js"></script> 
                `} 
                </code>
            </pre>
            <p>Thats all! Now reuse different CSS Components without hard-coding the css part. </p>
            <p>Make sure to use the assigned <span>className (OR class)</span> properly.</p>
        </div>
    )
}

export default GettingStarted
