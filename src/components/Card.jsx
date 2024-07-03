import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../assets/css/styles.css";
import "../assets/css/card.css";

function Card({ id, handleClick, isHome }) {
    const [showPopup, setShowPopup] = useState(false);
    const products = useSelector((state) => state.products.list);
    const product = products.find((product) => product.id === id);

    const handleAddToCart = () => {
        handleClick();  
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    };

    const handleVerMasClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="card">
            <img src={`data:image/jpeg;base64,${product.image}`} alt={product.title} />
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <h3 className="card-subtitle">{product.subtitle}</h3>
                <p className="card-description">{product.description}</p>
                {!isHome && (
                    <div className='d-flex'>
                        <p className="card-price">$ {product.price}</p>
                        <button id="add-cart-button" className="card-button bi bi-bag-fill mb-1" onClick={handleAddToCart}></button>
                        <Link to={`/product/${product.id}`} onClick={handleVerMasClick} className="link-info"><i className="bi bi-info-circle-fill info-product"></i></Link> 
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
