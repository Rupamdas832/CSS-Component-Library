import React from 'react'
import Heading from '../Components/Heading'

const Spinner = () => {
    return (
        <div>
        <Heading title="Spinner/Loader"/>
        <div className="container">
            <div className="spinner"></div>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522spinner%2522%253E%253C%252Fdiv%253E"
                className="iframeSmall"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </div>
        </div>
    )
}

export default Spinner
