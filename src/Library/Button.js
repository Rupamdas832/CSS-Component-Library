import React from 'react'
import Heading from '../Components/Heading'

const Button = () => {
    return (
        <div>
        <Heading title="Button"/>
        <div className="buttonDiv">
            <button className="btn">Button</button>
            <button className="btn outline">Button</button>
            <button className="btn unstyled">Button</button>
        </div>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520className%253D%2522btn%2522%253EButton%253C%252Fbutton%253E%250A%253Cbutton%2520className%253D%2522btn%2520outline%2522%253EButton%253C%252Fbutton%253E%250A%253Cbutton%2520className%253D%2522btn%2520unstyled%2522%253EButton%253C%252Fbutton%253E"
            className="iframeSmall"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
        <div className="floatButtonDiv">
            <button className="btnFloat"><i class="fas fa-plus"></i></button>
            <button className="btnFloat md"><i class="fas fa-plus"></i></button>
        </div>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520className%253D%2522btnFloat%2522%253E%253Ci%2520class%253D%2522fas%2520fa-plus%2522%253E%253C%252Fi%253E%253C%252Fbutton%253E%250A%253Cbutton%2520className%253D%2522btnFloat%2520md%2522%253E%253Ci%2520class%253D%2522fas%2520fa-plus%2522%253E%253C%252Fi%253E%253C%252Fbutton%253E"
            className="iframeSmall"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </div>
    )
}

export default Button
