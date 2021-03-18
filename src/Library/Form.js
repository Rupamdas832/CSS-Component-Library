import React from 'react'
import Heading from '../Components/Heading'

const Form = () => {
    return (
        <div>
        <Heading title="Form"/>
        <div className="container">
            <div className="form">
                <label>Email Address</label>
                <input type="email"/>
                <label>Password</label>
                <input type="password"/>
                <button className="btn">Submit</button>
            </div>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522form%2522%253E%250A%2520%2520%2520%2520%253Clabel%253EEmail%2520Address%253C%252Flabel%253E%250A%2520%2520%2520%2520%253Cinput%2520type%253D%2522email%2522%252F%253E%250A%2520%2520%2520%2520%253Clabel%253EPassword%253C%252Flabel%253E%250A%2520%2520%2520%2520%253Cinput%2520type%253D%2522password%2522%252F%253E%250A%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2522%253ESubmit%253C%252Fbutton%253E%250A%253C%252Fdiv%253E"
                style={{width: "513px", height: "315px", margin: "2rem 0"}}
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <div className="formCard">
                <h1>Login</h1>
                <div className="formInput">
                    <label>Email</label>
                    <input placeholder="Type your email" type="email"/>
                </div>
                <div className="formInput">
                    <label>Password</label>
                    <input placeholder="Type your password" type="password"/>
                </div>
                <button className="formBtn">LogIn</button>
            </div>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522formCard%2522%253E%250A%2520%2520%2520%2520%253Ch1%253ELogin%253C%252Fh1%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522formInput%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%253EEmail%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520placeholder%253D%2522Type%2520your%2520email%2522%2520type%253D%2522email%2522%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522formInput%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%253EPassword%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520placeholder%253D%2522Type%2520your%2520password%2522%2520type%253D%2522password%2522%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cbutton%2520className%253D%2522formBtn%2522%253ELogIn%253C%252Fbutton%253E%250A%253C%252Fdiv%253E"
                style={{width: "698px", height: "407px", margin: "2rem 0"}}
                sandbox="allow-scripts allow-same-origin">
            </iframe> 
        </div>
        </div>
    )
}

export default Form
