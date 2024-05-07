import React, { useState, useEffect } from 'react';
import ProductList from "../components/ProductList.jsx";

const Cart = ({ productosSeleccionados, setProductosSeleccionados }) => {
    const [seleccionEnvio, setEnvio] = useState('seleccionarEnvio');
    const [seleccionMetodo, setMetodo] = useState('seleccionarMetodo');
    const [codigoDescuento, setCodigoDescuento] = useState('');
    const [descuentoAplicado, setDescuentoAplicado] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [precioConDescuento, setPrecioConDescuento] = useState(0);
    const [productoEliminado, setProductoEliminado] = useState("opacity-0-height-0");

    const [compraExitosaVisible, setCompraExitosaVisible] = useState(false); // Estado para controlar si se muestra el mensaje de compra exitosa

    const handleClick = async (productId) => {
        setProductoEliminado("disappear");
        setProductoEliminado("opacity-0-height-0");
        setProductosSeleccionados(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const compraExitosa = () => {
        setCompraExitosaVisible(true); // Mostrar el modal de compra exitosa
    };
    

    const handleCompra = () => {
        compraExitosa(); // Llamar a la función de compra exitosa al hacer clic en "Finalizar Compra"
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

    return (
        <div className='cart'>
        {compraExitosaVisible && <div className="modal-overlay"></div>}
        <section id="cart-banner" className="d-flex justify-content-center align-items-center">
            <div className="padding-nav"></div>
            <h1 className="white-1 padding-nav-title">Carrito</h1>
        </section>
            <div className='cart-items'>
                <div className="product-list-header d-flex align-items-center fw-bold ps-2">
                    <span>Título</span>
                    <span>Artista</span>
                    <span>Precio</span>
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
            <div className='cart-checkout d-flex'>
                <div className="cart-envio">
                    <h3 className="text-center pb-2">Tipo de envío:</h3>
                    <select value={seleccionEnvio} onChange={(e) => setEnvio(e.target.value)}>
                        <option value="retiro">Retiro en Sucursal</option>
                        <option value="envio">Envío a domicilio</option>
                        <option value="seleccionarEnvio">Seleccionar envío...</option>
                    </select>
                </div>
                <div className="cart-envio">
                    <h3 className="text-center pb-2">Método de pago:</h3>
                    <select value={seleccionMetodo} onChange={(e) => setMetodo(e.target.value)}>
                        <option value="Tarjeta Credito">Tarjeta Credito</option>
                        <option value="Tarjeta Debito">Tarjeta Debito</option>
                        <option value="Mercado Pago">Mercado Pago</option>
                        <option value="seleccionar Metodo Pago">Seleccionar método pago...</option>
                    </select>
                </div>
                <div className="cart-descuento">
                    <h3 className="text-center pb-2">Código de descuento:</h3>
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
                    <button onClick={handleCompra}>Finalizar Compra</button>
                </div>
            </div>

            {/* Modal de compra exitosa */}
            <div className={`modal ${compraExitosaVisible ? 'show' : ''}`} tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Compra exitosa</h5>
                <button type="button" className="close" onClick={() => setCompraExitosaVisible(false)}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <p>Tu compra ha sido realizada con éxito.</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="boton-modal btn-primary" onClick={() => setCompraExitosaVisible(false)}>Cerrar</button>
            </div>
        </div>
    </div>
</div>

        </div>
    );
}

export default Cart;
