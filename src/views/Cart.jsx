import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from "../components/ProductList.jsx";
import Footer from '../components/Footer.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setProductosSeleccionados, calcularTotal, setAdress, setSeleccionEnvio, setCodigoDescuento, aplicarDescuento } from '../components/Redux/carritoSlice.js'; 
import { decrement } from '../components/Redux/counter';
import { addProductToCart } from '../components/Redux/carritoAPI';
import { selectAuthToken } from '../components/Redux/authSlice'; // Ajusta la ruta correcta
import "../assets/css/cart.css";

const Cart = () => {
    const [discountCode, setDiscountCode] = useState('');
    const [isDiscountValid, setIsDiscountValid] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const seleccionEnvio = useSelector((state) => state.carrito.seleccionEnvio);
    const productosSeleccionados = useSelector((state) => state.carrito.productosSeleccionados);
    const precioConDescuento = useSelector((state) => state.carrito.precioConDescuento);
    const direccion = useSelector((state) => state.carrito.adress);
    const count = useSelector((state) => state.counter.value);
    const username = useSelector((state) => state.auth.username);
    const token = useSelector(selectAuthToken); // Obtener el token del estado de Redux
    const storedToken = localStorage.getItem('token');
    
    useEffect(() => {
        dispatch(calcularTotal());  // Calcular el total basado en los productos seleccionados
    }, [productosSeleccionados, dispatch]);

    const handleClick = (productId) => {
        dispatch(decrement());
        dispatch(setProductosSeleccionados(productosSeleccionados.filter(item => item.id !== productId)));
    };

    const handleDireccionChange = (e) => {
        dispatch(setAdress(e.target.value));  
    };

    const handleEnvioChange = (e) => {
        dispatch(setSeleccionEnvio(e.target.value));
    };

    const handleAddToCart = () => {
        productosSeleccionados.forEach(async (product) => {
            dispatch(addProductToCart({ username, productId: product.id }));
        });

        navigate('/payment');
    };

    const handleDiscountChange = (e) => {
        setDiscountCode(e.target.value);
    };

    const validarDescuento = async (code, token) => {
        try {
            console.log("Este es el token: "+ token )
            const response = await fetch(`http://localhost:8080/api/descuentos/titulo/${code}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Estado de la respuesta:', response.status);
            if (!response.ok) {
                throw new Error('Código de descuento inválido');
            }
            const data = await response.json();
            console.log('Datos del descuento:', data);
            return data;
        } catch (error) {
            console.error('Error al validar el descuento:', error);
            return null;
        }
    };
    
    const handleApplyDiscount = async () => {
        try {
            if (!storedToken) {
                throw new Error('Token de autenticación no encontrado');
            }

            const descuento = await validarDescuento(discountCode, storedToken);
            if (descuento) {
                console.log('Descuento válido:', descuento);
                dispatch(aplicarDescuento(descuento.off));
                setIsDiscountValid(true);
            } else {
                console.log('Descuento inválido');
                setIsDiscountValid(false);
            }
        } catch (error) {
            console.error('Error al aplicar el descuento:', error);
            setIsDiscountValid(false);
        }
    };

    const renderPago = () => {
        if (count === 0) {
            return (
                <div className="d-flex flex-column align-items-center pb-5">
                    <h2 className="color-1 m-5 pb-5">No hay productos en el carrito :(</h2>
                    <div className="p-4"></div>
                </div>
            );
        }

        return (
            <div className='cart-checkout d-flex'>
                <div className="cart-envio">
                    <h3 className="text-center pb-2 cursor-default">Tipo de envío:</h3>
                    <select value={seleccionEnvio} onChange={handleEnvioChange}>
                        <option value="false">Retiro en Sucursal</option>
                        <option value="true">Envío a domicilio</option>
                    </select>
                    {seleccionEnvio === 'true' && (
                        <div className="d-flex flex-column mt-3 ">
                            <label htmlFor="direccion" className="text-center pb-2">Dirección de Envío:</label>
                            <input 
                                id="direccion"
                                type="text" 
                                placeholder="Ingrese la dirección de envío" 
                                value={direccion} 
                                onChange={handleDireccionChange}
                            />
                        </div>
                    )}
                </div>
                <div className="cart-descuento">
                    <h3 className="text-center pb-2 cursor-default">Código de descuento:</h3>
                    <input 
                        type="text" 
                        placeholder="Código de descuento" 
                        value={discountCode}
                        onChange={handleDiscountChange}
                    />
                    <button onClick={handleApplyDiscount}>Aplicar</button>
                    {!isDiscountValid && (
                        <p className="error">Código de descuento inválido</p>
                    )}
                </div>
                <div className="cart-total">
                    <p>Total: ${precioConDescuento.toFixed(2)}</p>
                </div>
                {username && productosSeleccionados.length > 0 && (
                    <div className="cart-finalizar" >
                        <button id="cart-finalizar-button" onClick={handleAddToCart}>Comprar</button>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className='cart d-flex flex-column align-items-center'>
            <section id="cart-banner" className="d-flex justify-content-center align-items-center">
                <div className="padding-nav"></div>
                <h1 className="white-1 padding-nav-title cursor-default">Carrito</h1>
            </section>
            <div className='cart-items'>
                <div className="product-list-header d-flex align-items-center fw-bold ps-2">
                    <span id="cart-padding-titulo" className="cursor-default">Título</span>
                    <span id="cart-padding-artista" className="cursor-default">Artista</span>
                    <span id="cart-padding-precio" className="cursor-default">Precio</span>
                    <span></span>
                </div>
                <div>
                    {productosSeleccionados.map(product => (
                        <ProductList
                            key={product.id}
                            imageSrc={product.image}
                            title={product.title}
                            subtitle={product.subtitle}
                            price={product.price}
                            handleClick={() => { handleClick(product.id); }}
                        />
                    ))}
                </div>
            </div>
            {renderPago()}
            <Footer />
        </div>
    );
};

export default Cart;
