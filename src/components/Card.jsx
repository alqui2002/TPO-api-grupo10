import React from 'react';
import  "../assets/css/styles.css";

function Card({imageSrc, title, subtitle, price,handleClick }) {

  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-subtitle">{subtitle}</h3>
        <p className="card-price">$  {price}</p>
        <button onClick={handleClick}> agregar</button>
      </div>
    </div>
  );
}

export default Card;
