import React from 'react'
import Heading from '../Components/Heading'

const Badge = () =>{
    return (
        <div>
        <Heading title="Notification Badge"/>
        <div className="badgeDiv">
            <div className="notification">
                <button className="btn outline"><i class="fas fa-shopping-bag"></i></button>
                <span className="badge">3</span>
            </div>  
            <div className="notification">
                <button className="btn outline"><i class="fas fa-envelope"></i></button>
                <span className="badge">99+</span>
            </div> 
        </div>
        <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522notification%2522%253E%250A%2520%2520%253Cbutton%2520className%253D%2522btn%2520outline%2522%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-bag%2522%253E%253C%252Fi%253E%253C%252Fbutton%253E%250A%2520%2520%253Cspan%2520className%253D%2522badge%2522%253E3%253C%252Fspan%253E%250A%253C%252Fdiv%253E%2520%2520%250A%253Cdiv%2520className%253D%2522notification%2522%253E%250A%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520outline%2522%253E%253Ci%2520class%253D%2522fas%2520fa-envelope%2522%253E%253C%252Fi%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cspan%2520className%253D%2522badge%2522%253E99%252B%253C%252Fspan%253E%250A%253C%252Fdiv%253E"
  className="iframeMedium"
  sandbox="allow-scripts allow-same-origin">
</iframe>
        </div>
        
    )
}

export default Badge
