import React from 'react'
import "./productList.css"
import Product from '../product/Product'
import { products } from "../../data";
import Github from "../../img/Github.png";

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title"> Create & Explore </h1>
        <p className="pl-desc">
        Explore the API usage , the CRUD usage, and the Overall Project usage by clicking on the projects below: 
        </p>
      </div>
      <div className="pl-list">
        
      {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}

         

      
         
          </div>
    </div>
   
  )
}

export default ProductList
