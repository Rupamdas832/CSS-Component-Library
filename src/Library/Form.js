import React from 'react'
import Heading from '../Components/Heading'

const Form = () => {
    return (
        <div>
        <Heading title="Form"/>
        <div class="formDiv">
        <div class="form">
            <label>Email Address</label>
            <input type="email"/>
            <label>Password</label>
            <input type="password"/>
            <button class="btn">Submit</button>
        </div>
        <pre>
            <code>
            {`
<div class="form">
    <label>Email Address</label>
    <input type="email"/>
    <label>Password</label>
    <input type="password"/>
    <button class="btn">Submit</button>
</div>    
            `}
            </code>
        </pre>
        <div class="formCard">
            <h1>Login</h1>
            <div class="formInput">
                <label>Email</label>
                <input placeholder="Type your email" type="email"/>
            </div>
            <div class="formInput">
                <label>Password</label>
                <input placeholder="Type your password" type="password"/>
            </div>
            <button class="formBtn">LogIn</button>
        </div>
        <pre>
            <code>
            {`
<div class="formCard">
    <h1>Login</h1>
    <div class="formInput">
        <label>Email</label>
        <input placeholder="Type your email" type="email"/>
    </div>
    <div class="formInput">
        <label>Password</label>
        <input placeholder="Type your password" type="password"/>
    </div>
    <button class="formBtn">LogIn</button>
</div>    
            `}
            </code>
        </pre> 
    </div>
        </div>
    )
}

export default Form
