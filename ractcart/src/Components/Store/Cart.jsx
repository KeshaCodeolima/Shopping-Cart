import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import { removecart,incermentquantity,decrementquantity } from './CartSlice';

function Cart() {
    const cartitems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()

    const handleincrementquantity = (id)=>{
        dispatch(incermentquantity({id}));
    };

    const handledecrementquantity = (id)=>{
        dispatch(decrementquantity({id}));
    };

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
                                                <span className='addspan'onClick={()=>handledecrementquantity(item.id)}>-</span>
                                                <span className='addspan'>{item.quantity}</span>
                                                <span className='addspan'onClick={()=>handleincrementquantity(item.id)}>+</span>
                                            </div>
                                            <button className='cartbtn' onClick={()=>dispatch(removecart({id:item.id}))}>Remove</button>
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
