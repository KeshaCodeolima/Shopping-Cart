import React from 'react';
import './HomePage.css';
import { Products } from '../Product';
import ProductsCart from '../ProductsCart';

function HomePage() {
    return (
        <div  className='productmain'>
            <div>
                <h1>Home Page</h1>
            </div>
            <div className="productmainbox">
                {Products.map((product, key)=>
                <ProductsCart key={key} data={product} />
                )}
            </div>
        </div>
    )
}

export default HomePage
