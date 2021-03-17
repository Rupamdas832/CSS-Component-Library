import React from 'react'
import "./Navigation.css"

const Navigation = ({setRoute}) => {

    const routeClicked = (btnName) => {
        setRoute(btnName)
    }
    const routes = [
        "Navbar", "Avatar","Button","Card","Input","Form","Modal"
    ]
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
