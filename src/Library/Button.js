import React from 'react'
import Heading from '../Components/Heading'

const Button = () => {
    return (
        <div>
        <Heading title="Button"/>
        <div className="buttonDiv">
            <button class="btn">Button</button>
            <button class="btn outline">Button</button>
            <button class="btn unstyled">Button</button>
        </div>
        <pre>
            <code>
            {`
<button class="btn">Button</button>
<button class="btn outline">Button</button>
<button class="btn unstyled">Button</button>
            `}
            </code>
        </pre>
        <div className="floatButtonDiv">
            <button class="btnFloat"><i class="fas fa-plus"></i></button>
            <button class="btnFloat md"><i class="fas fa-plus"></i></button>
        </div>
        <pre>
            <code>
            {`
<button class="btnFloat"><i class="fas fa-plus"></i></button>
<button class="btnFloat md"><i class="fas fa-plus"></i></button>
            `}
            </code>
        </pre>
    </div>
    )
}

export default Button
