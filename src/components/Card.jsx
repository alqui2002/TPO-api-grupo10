import React, { useState } from 'react';
import "../assets/css/styles.css";

function Card({ imageSrc, title, subtitle, price, handleClick, isHome }) {
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = () => {
      handleClick();  
      setShowPopup(true); // Mostrar el pop-up al hacer clic en "Agregar al carrito"
        setTimeout(() => {
            setShowPopup(false); // Ocultar el pop-up después de 3 segundos
        }, 2000);
        // Realiza otras acciones aquí si es necesario
    };

    return (
        <div className="card">
            <img src={imageSrc} alt={title} />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h3 className="card-subtitle">{subtitle}</h3>
                {!isHome && ( // Estado que verifica si la card está en home para no mostrar el precio.
                    <div className='d-flex'>
                        <p className="card-price">$ {price}</p>
                        <button id="add-cart-button" className="card-button bi bi-bag-fill mb-1" onClick={handleAddToCart}></button>
                    </div>
                )}
            </div>
            {showPopup && (
                <div className="popup">
                    <p>Agregado al carrito</p>
                </div>
            )}
        </div>
    );
}

export default Card;






