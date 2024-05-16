import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/accountsSlice';
import { Link } from 'react-router-dom';

function Card({ id, isHome }) {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.accounts.currentUser);
    const [quantity, setQuantity] = useState(currentUser && currentUser.cart ? currentUser.cart[id] || 0 : 0);
    const products = useSelector(state => state.products.products);
    const product = products.find(product => product.id == id);

    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = () => {
        if (quantity < 10) {
            setQuantity(prevQuantity => prevQuantity + 1);
            dispatch(addItemToCart(id));
        }
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    };

    if (!product) { return <div>Loading...</div>; }

    return (
        <div className="card">
            <img src={product.image} alt={product.title} />
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <h3 className="card-subtitle">{product.subtitle}</h3>
                {!isHome && (
                    <div className='d-flex'>
                    <p className="card-price">$ {product.price}</p>
                    <button id="add-cart-button" className="card-button bi bi-bag-fill mb-1" onClick={handleAddToCart}></button>
                    <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)} className="link-info"><i className="bi bi-info-circle-fill info-product"></i></Link> 
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

