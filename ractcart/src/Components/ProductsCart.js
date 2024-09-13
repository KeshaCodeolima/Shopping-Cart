import React from 'react'

const ProductsCart= (props)=> {
  const {id,name,image,description}= props.data;
  return (
    <div className='itembox'>
      <img src={image} alt='image1'  className='boximg' />
    </div>
  )
}

export default ProductsCart

