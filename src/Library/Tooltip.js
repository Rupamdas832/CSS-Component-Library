import React from 'react'
import Heading from '../Components/Heading';

const Tooltip = () => {
    return (
        <div>
        <Heading title="Tooltip"/>
        <div className="container">
            <div className="tooltip">
                <button className="btn outline"><i class="fas fa-info-circle"></i></button>
                <span className="tooltipText">Password should be atleast 8 characters and must contain alphanumeric.</span>
            </div>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522tooltip%2522%253E%250A%2509%253Cbutton%2520className%253D%2522btn%2520outline%2522%253E%253Ci%2520class%253D%2522fas%2520fa-info-circle%2522%253E%253C%252Fi%253E%253C%252Fbutton%253E%250A%2509%253Cspan%2520className%253D%2522tooltipText%2522%253EPassword%2520should%2520be%2520atleast%25208%2520characters%2520and%2520must%2520contain%2520alphanumeric.%253C%252Fspan%253E%250A%253C%252Fdiv%253E"
                className="iframeMedium"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </div>
        </div>
    )
}

export default Tooltip;