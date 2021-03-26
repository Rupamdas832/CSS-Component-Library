import React from 'react'
import "./GettingStarted.css"
import Heading from '../Components/Heading'

const GettingStarted = () => {
    return (
        <div>
            <Heading title="Getting Started"/>
            <h2>Installation</h2>
            <p>Add the following code within the <span>head</span> tag inside the <span>index.html</span> of your React project</p>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fuishop.netlify.app%252Fstyle.css%2522%252F%253E"
                className="iframeSmall"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <p>Add the following code within the <span>script</span> tag inside the <span>index.html</span> of your project</p>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cscript%2520src%253D%2522https%253A%252F%252Fuishop.netlify.app%252Fapp.js%2522%253E%253C%252Fscript%253E"
                className="iframeSmall"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <p>Thats all! Now reuse different CSS Components without hard-coding the css part. </p>
            <p>Make sure to use the assigned <span>className (OR class)</span> properly.</p>
        </div>
    )
}

export default GettingStarted
