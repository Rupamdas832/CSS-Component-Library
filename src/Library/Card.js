import React from 'react'
import Heading from '../Components/Heading'

const Card = () => {
    return (
        <div>
        <Heading title="Card"/>
        <div class="card">
            <div class="cardHeader">
                <h2>Heading</h2>
            </div>
            <div class="cardBody">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="cardFooter">
                <button class="btn outline">Like</button>
                <button class="actionBtn">Read more...</button>
            </div>   
        </div>
        <pre>
            <code>
                {`
<div class="card">
    <div class="cardHeader">
        <h2>Heading</h2>
    </div>
    <div class="cardBody">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div class="cardFooter">
        <button class="btn outline">Like</button>
        <button class="actionBtn">Read more...</button>
    </div>   
</div>    
                `}
            </code>
        </pre>
        <div class="card">
            <div class="cardHeader">
                <h2>Heading</h2>
            </div>
            <div class="cardImg">
                <img src="https://images.unsplash.com/photo-1553481187-be93c21490a9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
            </div>
            <div class="cardBody">
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
            </div>
            <div class="cardFooter">
                <button class="btn outline"><i class="far fa-heart"></i></button>
                <button class="actionBtn">More..</button>
            </div>   
        </div>
        <pre>
            <code>
                {`
<div class="card">
    <div class="cardHeader">
        <h2>Heading</h2>
    </div>
    <div class="cardImg">
        <img src="sample.jpg"/>
    </div>
    <div class="cardBody">
        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
    </div>
    <div class="cardFooter">
        <button class="btn outline"><i class="far fa-heart"></i></button>
        <button class="actionBtn">More..</button>
    </div>   
</div>
                `}
            </code>
        </pre>
        <div class="ecommerceCard">
            <div class="cardBadge">
                <h5>New</h5>
            </div>
            <div class="cardImg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxtc_LfP4RWXhrXJDDQyLZlEWVrlPLLhlF6LdU9UkiWlYGZfHEsSIzqU5fS7LGe6UOlHaCtpV&usqp=CAc"/>
            </div>
            <div class="cardBody">
                <p>boAt Airdopes 131 Bluetooth Headset</p>
            <div class="cardPrice">
                <h4>₹5999</h4>
                <h5>50% off</h5>
            </div>
            </div>
            <div class="cardFooter">
                <button class="btn outline"><i class="far fa-heart"></i></button>
                <button class="btn">Add to Cart</button>
            </div>   
        </div>
        <pre>
            <code>
                {`
<div class="ecommerceCard">
    <div class="cardBadge">
        <h5>New</h5>
    </div>
    <div class="cardImg">
        <img src="sample.jpg"/>
    </div>
    <div class="cardBody">
        <p>boAt Airdopes 131 Bluetooth Headset</p>
    <div class="cardPrice">
        <h4>₹5999</h4>
        <h5>50% off</h5>
    </div>
    </div>
    <div class="cardFooter">
        <button class="btn outline"><i class="far fa-heart"></i></button>
        <button class="btn">Add to Cart</button>
    </div>   
</div>
                `}
            </code>
        </pre>
        </div>
    )
}

export default Card
