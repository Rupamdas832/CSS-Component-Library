import React from 'react'
import "./Navigation.css"

const Navigation = ({setRoute}) => {

    const routeClicked = (btnName) => {
        setRoute(btnName)
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
            <li onClick={e => routeClicked(e.target.innerText.toLowerCase())}>Getting Started</li>
            {routes.map((route,idx) => {
                return <li onClick={e => routeClicked(e.target.innerText.toLowerCase())} key={idx}>{route}</li>
            })}
        </ul>
            
        </div>
    )
}

export default Navigation
