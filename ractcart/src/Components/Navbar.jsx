import React from 'react';
import './Navbar.css';
import shoppingimage from '../assets/Images/ShoppingCart.png'

function Navbar() {
    return (
        <>
        <nav className='navmain'>
            <div className="leftnav">
                <p className='textp'>Online Shopping Cart</p>
            </div>
            <div className="rightnav">
                <ul>
                    <li>Login</li>
                    <li>Sign In</li>
                </ul>
                <img src={shoppingimage} alt="cart" className='imgnav' />
            </div>
        </nav>
        </>
    )
}

export default Navbar
