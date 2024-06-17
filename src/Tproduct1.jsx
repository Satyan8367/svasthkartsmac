import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { useState } from 'react';



function Tproduct1(props) {


  


  return (
    <>


    <div className="tproduct-container">
      <span className='add-cart'><FavoriteBorderIcon /><span className='wishlist'>Add To Wishlist</span></span>
      <span className='quick-view'>Quick View</span>
        <img src={props.tproductimg} alt=''/>
        <a className='product-heading' href='./'>{props.heading}</a>
        <a className='product-desc' href='./'>{props.description}</a>
        <span className='product-price'>{props.price}</span>
        <button className='btn' onClick={props.add}>Add To Cart</button>

    </div>

    
    </>
  )
}



export default Tproduct1;


