import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div class="navbar ecommerce">
                <div class="navLogo">
                    LOGO
                </div>
                <div class="navSearch ecommerce">
                    <label><i class="fab fa-searchengin"></i></label>
                    <input placeholder="Quick search anything"/>
                </div>
                <div class="navLinks  ecommerce">
                    <button class="navBtn ecommerce">Men</button>
                    <button class="navBtn ecommerce">Women</button>
                    <button class="navBtn ecommerce">Kids</button>
                    <button class="navBtn ecommerce">Offers</button>
                </div>
                <div class="navAction ecommerce">
                    <button class="btn unstyled"><i class="fas fa-user-circle"></i></button>
                    <button class="btn unstyled"><i class="fab fa-gratipay"></i></button>
                    <button class="btn unstyled"><i class="fas fa-shopping-bag"></i></button>
                </div>
            </div>
            <pre>
                <code>
                    {`
<div class="navbar ecommerce">
    <div class="navLogo">
        LOGO
    </div>
    <div class="navSearch ecommerce">
        <label><i class="fab fa-searchengin"></i></label>
        <input placeholder="Quick search anything"/>
    </div>
    <div class="navLinks  ecommerce">
        <button class="navBtn ecommerce">Men</button>
        <button class="navBtn ecommerce">Women</button>
        <button class="navBtn ecommerce">Kids</button>
        <button class="navBtn ecommerce">Offers</button>
    </div>
    <div class="navAction ecommerce">
        <button class="btn unstyled"><i class="fas fa-user-circle"></i></button>
        <button class="btn unstyled"><i class="fab fa-gratipay"></i></button>
        <button class="btn unstyled"><i class="fas fa-shopping-bag"></i></button>
    </div>
</div>
                    `}
                </code>
            </pre>
            <div class="navbar">
                <div class="navLogo">
                    LOGO
                </div>
                <div class="navLinks">
                    <button class="navBtn">Home</button>
                    <button class="navBtn">About</button>
                    <button class="navBtn">Projects</button>
                    <button class="navBtn">Contact</button>
                </div>
                <div class="navAction">
                    <button class="btn">Sign Out</button>
                </div>
            </div>
            <pre>
                <code>
                {`
<div class="navbar">
    <div class="navLogo">
        LOGO
    </div>
    <div class="navLinks">
        <button class="navBtn">Home</button>
        <button class="navBtn">About</button>
        <button class="navBtn">Projects</button>
        <button class="navBtn">Contact</button>
    </div>
    <div class="navAction">
        <button class="btn">Sign Out</button>
</div>
            </div>
                `}
                </code>
            </pre>
        </div>
    )
}

export default Navbar
