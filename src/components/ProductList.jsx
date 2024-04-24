import React from 'react';
import  "../assets/css/styles.css";

function ProductList({imageSrc, title, subtitle, price,handleClick }) {

  return (
    <div className="product-list d-flex align-items-center background-white-2 w-100">
      <img src={imageSrc} alt={title} />
      <div className="d-flex align-items-start w-100">
        <p className="product-list-info">{title}</p>
        <p className="product-list-info">{subtitle}</p>
        <p className="product-list-info price">$ {price}</p>
      </div>
      <button  className="delete-button" onClick={handleClick}>X
      </button>

    </div>
  );
}

export default ProductList;
