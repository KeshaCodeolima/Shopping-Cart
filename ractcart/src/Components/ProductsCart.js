import React from 'react'
import './ProductCart.css';

const ProductsCart= (props)=> {
  const {name,image,price}= props.data;
  return (
    <div className='itembox'>
      <img src={image} alt='image1'  className='boximg' />
      <h3>{name}</h3>
      $<p>{price}</p>
    </div>
  )
}

export default ProductsCart

