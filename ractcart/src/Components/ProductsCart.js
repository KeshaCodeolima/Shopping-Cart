import React from 'react'
import './ProductCart.css';

const ProductsCart = (props) => {
  const { name, image, price } = props.data;
  return (
    <div className='itembox'>
      <img src={image} alt='image1' className='boximg' />
      <h3>{name}</h3>
      <div className='btnp'>
        <p>${price}</p>
        <button className='btncart'>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductsCart

