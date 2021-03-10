import React from 'react'
import Heading from '../Components/Heading'

const Input = () => {
    return (
        <div>
        <Heading title="Input"/>
        <div class="inputDiv">
        <div class="input">
            <label>Name</label>
            <input placeholder="Enter name"/>
        </div>
        <pre>
            <code>
            {`
<div class="input">
    <label>Name</label>
    <input placeholder="Enter name"/>
</div>    
            `}
            </code>
        </pre>
        <div class="password">
            <label>Password</label>
            <input type="password" id="password" placeholder="Enter Password"/>
            <button id="passwordShow">Show</button>
        </div>
        <pre>
            <code>
            {`
<div class="password">
    <label>Password</label>
    <input type="password" id="password" placeholder="Enter Password"/>
    <button id="passwordShow">Show</button>
</div>            
            `}
            </code>
        </pre>
    </div>
        </div>
    )
}

export default Input
