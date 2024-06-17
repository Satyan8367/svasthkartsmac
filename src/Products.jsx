import React from 'react'
import product_img1 from './images/product-img1.webp';
import product_img2 from './images/product-img2.webp';
import product_img3 from './images/product-img3.webp';
import './Products.css';

export default function Products() {
  return (
    <>
    <div className="product-head">
            <h2>
            Explore our finest range of organic, ayurvedic, and herbal products. Starting with spices, personal care, nutrition, health beverages, proteins, health drops, juices, to sanitary pads.
            </h2>
        </div>
    <div className="product-container">
        
        <div className="product-body">
            <div className="product-img">
            <img src={product_img1} alt='product-img'/>
            </div>
           
            <div className="product-img">
            <img src={product_img2} alt='product-img'/>
            </div>
            <div className="product-img">
            <img src={product_img3} alt='product-img'/>
            </div>
        </div>

    </div>
    </>
  )
}
