import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductList from "../components/ProductList.jsx";
import Footer from '../components/Footer.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setProductosSeleccionados, setSeleccionEnvio, setCodigoDescuento, calcularTotal, setDescuentoAplicado, setAdress } from '../components/Redux/carritoSlice.js'; 
import { increment, decrement } from '../components/Redux/counter';
import { addProductToCart } from '../components/Redux/carritoAPI';
import "../assets/css/cart.css";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productosSeleccionados = useSelector((state) => state.carrito.productosSeleccionados);
    const seleccionEnvio = useSelector((state) => state.carrito.seleccionEnvio);
    const codigoDescuento = useSelector((state) => state.carrito.codigoDescuento);
    const descuentoAplicado = useSelector((state) => state.carrito.descuentoAplicado);
    const precioConDescuento = useSelector((state) => state.carrito.precioConDescuento);
    const totalPrice = useSelector((state) => state.carrito.totalPrice);
    const direccion = useSelector((state) => state.carrito.adress);
    const count = useSelector((state) => state.counter.value);
    const username = useSelector((state) => state.auth.username);

    useEffect(() => {
        dispatch(calcularTotal());
    }, [productosSeleccionados, dispatch]);

    useEffect(() => {
        if (codigoDescuento === 'Cod10Off') {
            const descuento = totalPrice * 0.1;
            dispatch(setDescuentoAplicado(descuento));
        } else {
            dispatch(setDescuentoAplicado(0));
        }
    }, [codigoDescuento, totalPrice, dispatch]);

    useEffect(() => {
        let precioConDescuento = totalPrice - descuentoAplicado;
        if (seleccionEnvio === 'true') {
            precioConDescuento += 30;
        }
        dispatch(calcularTotal(precioConDescuento));
    }, [totalPrice, descuentoAplicado, seleccionEnvio, dispatch]);

    useEffect(() => {
        if (seleccionEnvio === 'false') {
            dispatch(setAdress(''));  // Limpiar la dirección si el envío es a sucursal
        }
    }, [seleccionEnvio, dispatch]);

    const handleClick = (productId) => {
        dispatch(decrement());
        dispatch(setProductosSeleccionados(productosSeleccionados.filter(item => item.id !== productId)));
    };
    const handleDireccionChange = (e) => {
        dispatch(setAdress(e.target.value));  // Actualiza la dirección en el estado global
    };
    

    const handleAddToCart = () => {
        productosSeleccionados.forEach(async (product) => {
            dispatch(addProductToCart({username,productId: product.id }));
            /*
            try {
                const response = await fetch(`http://localhost:8080/api/cuentas/add-item-cart?username=${encodeURIComponent(username)}&viniloId=${product.id}&cantidad=1`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al agregar el producto al carrito');
                }
            } catch (error) {
                console.error('Error al agregar el producto al carrito:', error.message);
            }*/
        });

        navigate('/payment');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (codigoDescuento === 'Cod10Off') {
                dispatch(setCodigoDescuento(codigoDescuento));
            } else {
                alert('El código de descuento no es válido.');
            }
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
                    <select value={seleccionEnvio} onChange={(e) => dispatch(setSeleccionEnvio(e.target.value))}>
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
                                  // Llama a handleDireccionChange al cambiar el texto
                            />
                        </div>
                    )}
                </div>
                <div className="cart-descuento">
                    <h3 className="text-center pb-2 cursor-default">Código de descuento:</h3>
                    <input 
                        type="text" 
                        placeholder="Código de descuento" 
                        value={codigoDescuento} 
                        onChange={(e) => dispatch(setCodigoDescuento(e.target.value))} 
                        onKeyDown={handleKeyDown}
                    />
                </div>
                
                <div className="cart-total">
                    {descuentoAplicado > 0 && (
                        <p>Descuento aplicado: $ {descuentoAplicado.toFixed(2)}</p>
                    )}
                    <p>Total: ${precioConDescuento.toFixed(2)}</p>
                </div>
                {username && productosSeleccionados.length > 0 && (
                    <div className="cart-finalizar" >
                        <button id="cart-finalizar-button" onClick={handleAddToCart}>Comprar</button>
                    </div>
                )}
                
            </div>
        );
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
}

export default Cart;
