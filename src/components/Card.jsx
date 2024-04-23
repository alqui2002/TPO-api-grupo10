import React from 'react';
import  "../assets/css/styles.css";

function Card({imageSrc, title, subtitle, price,handleClick }) {

  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-subtitle">{subtitle}</h3>
        <div className='d-flex'>
          <p className="card-price">$  {price}</p>
          <button className="card-button" onClick={handleClick}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
            </svg></button>
        </div>
      </div>
    </div>
  );
}

export default Card;