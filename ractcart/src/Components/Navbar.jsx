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
                    <ul className='ulnav'>
                        <li className='linav'>Sign in</li>
                        <li className='linav'>Login</li>
                        <img src={shoppingimage} alt="cart"  className='imgnav'/>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
