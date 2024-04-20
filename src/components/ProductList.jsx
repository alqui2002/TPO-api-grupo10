import React from 'react';
import  "../assets/css/styles.css";

function ProductList({imageSrc, title, subtitle, price,handleClick }) {

  
  return (
    <div className="productList">
      <img src={imageSrc} alt={title} />
      <div className="productList-body">
        <p className="productList-info">{title}</p>
        <p className="productList-info">{subtitle}</p>
        <p className="productList-info price">$  {price}</p>
      </div>
      <button  className="delete-button" onClick={handleClick}>X
      </button>

    </div>
  );
}

export default ProductList;
