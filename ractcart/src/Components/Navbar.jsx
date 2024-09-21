import React from 'react';
import './Navbar.css';
import shoppingimage from '../assets/Images/ShoppingCart.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {

    const cartitems = useSelector(state=>state.cart.cart)
    return (
        <>
            <nav className='navmain'>
                <div className="leftnav">
                    <p className='textp'>Online Shopping Cart</p>
                </div>
                <div className="rightnav">
                    <ul className='ulnav'>
                        <Link to="/additem" ><li className='linav'>Add Items</li></Link>
                        <Link to="/signin" ><li className='linav'>Sign in</li></Link>
                        <Link to="/register"><li className='linav'>Register</li></Link>
                        <Link to="/cart">
                        <img src={shoppingimage} alt="cart"  className='imgnav'/>
                        <span className='cartitems'>{cartitems.length}</span>

                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
