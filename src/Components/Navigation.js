import React from 'react'
import "./Navigation.css"

const Navigation = ({setRoute}) => {

    const routeClicked = (btnName) => {
        setRoute(btnName)
    }
    return (
        <div className="navigationSection">
        <ul>
            <li onClick={e => routeClicked(e.target.innerText.toLowerCase())}>Getting Started</li>
            <li onClick={e => routeClicked(e.target.innerText.toLowerCase())}>Avatar</li>
            <li onClick={e => routeClicked(e.target.innerText.toLowerCase())}>Button</li>
            <li onClick={e => routeClicked(e.target.innerText.toLowerCase())}>Card</li>
            <li onClick={e => routeClicked(e.target.innerText.toLowerCase())}>Input</li>
            <li onClick={e => routeClicked(e.target.innerText.toLowerCase())}>Form</li>
        </ul>
            
        </div>
    )
}

export default Navigation
