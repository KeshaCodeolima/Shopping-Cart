import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';

function Cart() {
    const cartitems = useSelector(state => state.cart.cart)
    return (
        <>
            <h1>Cart page</h1>
            {
                cartitems.map((item, index) => (
                    <div key={index}>
                        <div className="cartbox">
                            <img
                                src={`http://localhost:3001/` + item.image}
                                alt={item.name}
                                className='boximg' />
                            <h3> {item.name} </h3>
                            <div className='btnp'>
                                <p>{item.price}</p>
                                <button className='btncart'>Remove</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Cart
