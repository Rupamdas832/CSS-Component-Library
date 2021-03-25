import React, {useState} from 'react'
import "./Navigation.css"

const Navigation = ({setRoute}) => {
    const [selectedRoute, setSelectedRoute] = useState("Getting Started")

    const routeClicked = (btnName) => {
        const btnNameLowerCase = btnName.toLowerCase()
        setRoute(btnNameLowerCase)
        setSelectedRoute(btnName)
    }
    const routes = [
        "Navbar", "Avatar","Badge","Button","Tooltip", "Card","Input","Form","Modal","Dropdown","Spinner"
    ]
    routes.sort(function(a,b){
        if(a>b){return 1;}
        if(a<b){return -1;}
        return 0
    })
    return (
        <div className="navigationSection">
        <ul>
            {selectedRoute === "Getting Started" ? (<li onClick={e => routeClicked(e.target.innerText)} className="route">Getting Started</li>) : (<li onClick={e => routeClicked(e.target.innerText)}>Getting Started</li>)}
            {routes.map((route,idx) => {
                return selectedRoute === route ? (<li onClick={e => routeClicked(e.target.innerText)} key={idx} className="route">{route}</li>) : (<li onClick={e => routeClicked(e.target.innerText)} key={idx}>{route}</li>)
            })}
        </ul>
            
        </div>
    )
}

export default Navigation
