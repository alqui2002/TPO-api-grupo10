import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ProductList from "../components/ProductList.jsx";

import Footer from '../components/Footer.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../components/Redux/counter';

import "../assets/css/cart.css";

const Cart = ({ productosSeleccionados, setProductosSeleccionados }) => {

    const [seleccionEnvio, setEnvio] = useState('seleccionarEnvio');
    const [seleccionMetodo, setMetodo] = useState('seleccionarMetodoPago');
    const [codigoDescuento, setCodigoDescuento] = useState('');
    const [descuentoAplicado, setDescuentoAplicado] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [precioConDescuento, setPrecioConDescuento] = useState(0);
    const [productoEliminado, setProductoEliminado] = useState("opacity-0-height-0");
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleClick = async (productId) => {
        dispatch(decrement());
        setProductosSeleccionados(prevItems => prevItems.filter(item => item.id !== productId));
        setProductoEliminado("opacity-0-height-0");
        await new Promise(resolve => setTimeout(resolve, (10)));
        setProductoEliminado("disappear");
    };

    useEffect(() => {
        const totalPrice = productosSeleccionados.reduce((acc, curr) => acc + parseInt(curr.price), 0);
        setTotalPrice(totalPrice);

        if (codigoDescuento === 'Cod10Off') {
            const descuentoCalculado = totalPrice * 0.1;
            setDescuentoAplicado(descuentoCalculado);
        } else {
            setDescuentoAplicado(0);
        }
    }, [productosSeleccionados, codigoDescuento]);

    useEffect(() => {
        let precioConDescuento = totalPrice - descuentoAplicado;
        if (seleccionEnvio === 'envio') {
            precioConDescuento += 30;
        }
        setPrecioConDescuento(precioConDescuento);
    }, [totalPrice, descuentoAplicado, seleccionEnvio]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (codigoDescuento === 'promociona') {
                const descuentoCalculado = totalPrice * 0.1;
                setDescuentoAplicado(descuentoCalculado);
            } else {
                alert('El código de descuento no es válido.');
            }
        }
    };

    const renderPago = () => {
        switch (count) {
            case 0:
                return (
                    <div className="d-flex flex-column align-items-center pb-5">
                        <h2 className="color-1 m-5 pb-5">No hay productos en el carrito :(</h2>
                        <div className="p-4"></div>
                    </div>
                );
            default:
                return(
                    <div className='cart-checkout d-flex'>
                        <div className="cart-envio">
                            <h3 className="text-center pb-2 cursor-default">Tipo de envío:</h3>
                            <select value={seleccionEnvio} onChange={(e) => setEnvio(e.target.value)}>
                                <option value="retiro">Retiro en Sucursal</option>
                                <option value="envio">Envío a domicilio</option>
                                <option value="seleccionarEnvio">Seleccionar envío...</option>
                            </select>
                        </div>
                        <div className="cart-descuento">
                            <h3 className="text-center pb-2 cursor-default">Código de descuento:</h3>
                            <input 
                                type="text" 
                                placeholder="Código de descuento" 
                                value={codigoDescuento} 
                                onChange={(e) => setCodigoDescuento(e.target.value)} 
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                        
                        <div className="cart-total">
                            {descuentoAplicado > 0 && (
                                <p>Descuento aplicado: $ {descuentoAplicado.toFixed(2)}</p>
                            )}
                            <p>Total: ${precioConDescuento.toFixed(2)}</p>
                        </div>
                        <div className="cart-finalizar">
                            <Link to="/payment" id="cart-finalizar-button">Comprar</Link>
                        </div>
                    </div>
                );
        }
    }

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
                            imageSrc={product.imageSrc}
                            title={product.title}
                            subtitle={product.subtitle}
                            price={product.price}
                            handleClick={() => { handleClick(product.id); }}
                        />
                    ))}
                </div>
            </div>
            {renderPago()}
            <div id="eliminar-producto-alert" className={`${productoEliminado} background-color-4 d-flex align-items-center`}>
                <h5 className="white-1 px-3 pt-3 pb-2">Producto eliminado.</h5>
                <button className="background-color-4" onClick={() => setProductoEliminado("opacity-0-height-0")}>
                    <h5 className="white-1 px-3 pt-3 pb-2">X</h5>
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
