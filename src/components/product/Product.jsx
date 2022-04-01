import React from 'react'
import "./product.css"
import Github from "../../img/Github.png";

const Product = ({img,link})=> {
  return (
    
    
   
    <>
    <div className='p-left'>
      <div className="p-center-browser">Useage of Api
        <div className="p-left-circle"></div>
        <div className="p-left-circle"></div>
        <div className="p-left-circle"></div>
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
    
    <div className='p-right'>
        <div className="p-center-browser">Useage of CRUD
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <div className="c-info-item">
            <a href="https://github.com/khargr14">
              <img src={Github} alt="" className="c-icon" />
            </a>
            </div>
            
        
      </div>


      <div className='p-center'>
        <div className="p-center-browser">Useage of Overall project
          <div className="p-center-circle"></div>
          <div className="p-center-circle"></div>
          <div className="p-center-circle"></div>
        </div>
        <div className="c-info-item">
            <a href="https://github.com/khargr14">
              <img src={Github} alt="" className="c-icon" />
            </a>
            </div>
            
        
      </div>
      
      </>


   

  )
}

export default Product