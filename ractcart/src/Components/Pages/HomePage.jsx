import React, { useEffect, useState } from 'react';
import './HomePage.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addcart } from '../Store/CartSlice';

function HomePage() {

    const dispatch = useDispatch()

    const [Items, setItems]= useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/getitems")
        .then(result => setItems(result.data))
        .catch(err => console.log(err));
    },[])

    return (
        <div  className='productmain'>
            <div>
                <h1>Home Page</h1>
            </div>
            <div className="productmainbox">
               {Items && Items.map((item,index)=>(
                <div className='itembox' key={index}>
                <img 
                    src={`http://localhost:3001/` + item.image} 
                    alt={item.name} 
                    className='boximg' 
                />
                <h3>{item.name}</h3>
                <div className='btnp'>
                    <p>{item.price}</p>
                    <button className='btncart' onClick={()=> dispatch(addcart({id:item.itemid,image:item.image,name:item.name,price:item.price,quantity:1}))}>Add To Cart</button>
                </div>
            </div>
               ))}
            </div>
        </div>
    )
}

export default HomePage
