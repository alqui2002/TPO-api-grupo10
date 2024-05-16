import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/accountsSlice';

const ProdDescripcion = () => {
    
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const currentUser = useSelector(state => state.accounts.currentUser);
    const { id } = useParams();
    const [quantity, setQuantity] = useState(currentUser && currentUser.cart ? currentUser.cart[id] || 0 : 0);
    const product = products.find(product => product.id == id);
    const [comprado, setComprado] = useState(false);

    const handleMoreQuantity = () => {
        if (quantity < 10) {
            setQuantity(prevQuantity => prevQuantity + 1);
            dispatch(addItemToCart(id));
        }
    };

    const renderComprado = () => {
        if (comprado) {
            return (
                <div id="carrito-add-button-descr-no-hover" className="background-green-1 white-1 d-flex align-items-center justify-content-center"><i id="check-comprado" class="bi bi-check-lg white-1 mt-1"></i></div>
            )
        } else {
            return(
                <button id="carrito-add-button-descr" className="background-green-1 white-1" onClick={() => (setComprado(true), handleMoreQuantity())}>Agregar al carrito <i className="bi bi-bag-fill mb-1"></i></button>
            )
        }
    } 

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="padding-nav"></div>
            <div className="d-flex align-items-center">
                <div id="product-description-card-container" className="d-flex flex-column align-items-center justify-content-center background-color-0">
                    <img src={product.image} alt="cover" />
                    <h3 className="mt-2">{product.title}</h3>
                    <h5 className="mb-4">{product.subtitle}</h5>
                    <h4 className="color-3">Precio: ${product.price}</h4>
                </div>
                <div id="product-description-description-container" className="d-flex flex-column align-items-center">
                    <p id="product-description-p">{product.description}</p>
                    <div className="d-flex mt-4">
                        <Link to="/Products" id="volver-button-descr" className="d-flex align-items-center background-color-3 white-1 px-3 me-2">Volver atrás</Link>
                        {renderComprado()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProdDescripcion;
