import React from 'react';
import  "../assets/css/styles.css";

function Card({ imageSrc, title, subtitle, price, handleClick, isHome}) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-subtitle">{subtitle}</h3>
        {isHome ? null : ( 
          <div className='d-flex'>
            <p className="card-price">$  {price}</p>
            <button id="add-cart-button" className="card-button bi bi-bag-fill mb-1" onClick={handleClick}></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;