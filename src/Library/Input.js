import React from 'react'
import Heading from '../Components/Heading'

const Input = () => {
    return (
        <div>
        <Heading title="Input"/>
        <div className="container">
            <div className="input">
                <label>Name</label>
                <input placeholder="Enter name"/>
            </div>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522input%2522%253E%250A%2520%2520%2520%2520%253Clabel%253EName%253C%252Flabel%253E%250A%2520%2520%2520%2520%253Cinput%2520placeholder%253D%2522Enter%2520name%2522%252F%253E%250A%253C%252Fdiv%253E"
                style={{width: "462px", height: "260px", margin: "2rem 0"}}
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <div className="password">
                <label>Password</label>
                <input type="password" id="password" placeholder="Enter Password"/>
                <button id="passwordShow">Show</button>
            </div>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522password%2522%253E%250A%2520%2520%2520%2520%253Clabel%253EPassword%253C%252Flabel%253E%250A%2520%2520%2520%2520%253Cinput%2520type%253D%2522password%2522%2520id%253D%2522password%2522%2520placeholder%253D%2522Enter%2520Password%2522%252F%253E%250A%2520%2520%2520%2520%253Cbutton%2520id%253D%2522passwordShow%2522%253EShow%253C%252Fbutton%253E%250A%253C%252Fdiv%253E%2520"
                style={{width: "749px", height: "278px", margin: "2rem 0"}}
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </div>
        </div>
    )
}

export default Input
