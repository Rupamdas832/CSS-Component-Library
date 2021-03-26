import React from 'react'
import Heading from '../Components/Heading'

const Dropdown = () => {
    return (
        <div>
        <Heading title="Dropdown Button"/>
        <div className="container">
            <div className="dropdown">
                <button className="btn">Dropdown Button</button>
                <div className="dropdownContent">
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522dropdown%2522%253E%250A%2509%253Cbutton%2520className%253D%2522btn%2522%253EDropdown%2520Button%253C%252Fbutton%253E%250A%2509%253Cdiv%2520className%253D%2522dropdownContent%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cul%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EHome%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EContact%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EAbout%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                className="iframeSmall"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </div>    
        </div>
    )
}

export default Dropdown
