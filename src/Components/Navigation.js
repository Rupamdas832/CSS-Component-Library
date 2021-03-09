import React from 'react'
import "./Navigation.css"

function Navigation({setRoute}) {

    const routeClicked = (btnName) => {
        console.log(btnName.value)
    }
    return (
        <div className="navigationSection">
            <button onClick={e => routeClicked(e.target)}>Badge</button>
            <button>Card</button>
            <button>Input</button>
            <button>Form</button>
            <button>Avatar</button>
        </div>
    )
}

export default Navigation
