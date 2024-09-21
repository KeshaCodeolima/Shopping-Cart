import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';

function Cart() {
    const cartitems = useSelector(state => state.cart.cart)
    return (
        <>
            <h1 className='carth1'>Cart page</h1>
            <div className="cartmain">
                <div className="cartleft">
                    {
                        cartitems.map((item, index) => (
                            <div key={index}>
                                <div className="cartbox">
                                    <img
                                        src={`http://localhost:3001/` + item.image}
                                        alt={item.name}
                                        className='cartboximg' />
                                    <div className="carttexts">
                                        <h3> {item.name} </h3>
                                        <div className=' cartbtnp'>
                                            <p>{item.price}</p>
                                            <div className="addmore">
                                                <span className='addspan'>-</span>
                                                <span className='addspan'>1</span>
                                                <span className='addspan'>+</span>
                                            </div>
                                            <button className='cartbtn'>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="cartright">

                </div>
            </div>
        </>
    )
}

export default Cart
