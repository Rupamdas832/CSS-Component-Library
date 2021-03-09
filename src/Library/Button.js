import React from 'react'
import Heading from '../Components/Heading'

const Button = () => {
    return (
        <div>
        <Heading title="Button"/>
        <div class="buttonDiv">
        <div>
            <button class="btn">Button</button>
            <button class="btn outline">Button</button>
            <button class="btn hover">Button</button>
            <button class="btn unstyled">Button</button>
        </div>
        <div>
            <button class="btnFloat"><i class="fas fa-plus"></i></button>
            <button class="btnFloat md"><i class="fas fa-plus"></i></button>
        </div>
    </div>
        </div>
    )
}

export default Button
