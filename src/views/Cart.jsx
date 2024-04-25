import React, { useState, useEffect } from 'react';
import ProductList from "../components/ProductList.jsx";

const Cart = ({ productosSeleccionados, setProductosSeleccionados }) => {
    const [seleccionEnvio, setEnvio] = useState('seleccionarEnvio');
    const [codigoDescuento, setCodigoDescuento] = useState('');
    const [descuentoAplicado, setDescuentoAplicado] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [precioConDescuento, setPrecioConDescuento] = useState(0);

    const alertaEliminado = () => {
        alert("Producto Eliminado");
        console.log (productosSeleccionados);
    };

    const handleClick = (productId) => {
        setProductosSeleccionados(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const compraExitosa = () => {
        alert("Compra realizada con éxito!");
        console.log (productosSeleccionados);
    };

    const handleCompra = () => {
        compraExitosa();
    };

    useEffect(() => {
        // Actualizar el precio total cuando cambie la lista de productos seleccionados
        const totalPrice = productosSeleccionados.reduce((acc, curr) => acc + parseInt(curr.price), 0);
        setTotalPrice(totalPrice);

        // Aplicar descuento si corresponde
        if (codigoDescuento === 'Cod10Off') {
            const descuentoCalculado = totalPrice * 0.1;
            setDescuentoAplicado(descuentoCalculado);
        } else {
            setDescuentoAplicado(0);
        }
    }, [productosSeleccionados, codigoDescuento]);

    useEffect(() => {
        // Actualizar el precio con descuento cuando cambie el descuento
        const precioConDescuento = totalPrice - descuentoAplicado;
        setPrecioConDescuento(precioConDescuento);
    }, [totalPrice, descuentoAplicado]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Validar el código de descuento y aplicar el descuento si es válido
            if (codigoDescuento === 'Cod10Off') {
                const descuentoCalculado = totalPrice * 0.1;
                setDescuentoAplicado(descuentoCalculado);
            } else {
                // Mostrar mensaje de error si el código no es válido
                alert('El código de descuento no es válido.');
            }
        }
    };

    return (
        <div className='cart'>
            <section id="cart-banner" className="d-flex justify-content-center align-items-center">
                <div className="padding-nav"></div>
                <h1 className="white-1 padding-nav-title">Carrito</h1>
            </section>
            
            <div className='cart-items'>
                <div className="product-list-header d-flex align-items-center fw-bold ps-2">
                    <span>Título</span>
                    <span>Subtítulo</span>
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
                            handleClick={() => { handleClick(product.id); alertaEliminado(); }}
                        />
                    ))}
                </div>
            </div>
            <div className='cart-checkout d-flex'>
                <div className="cart-envio">
                    <h3>Seleccionar tipo de envío:</h3>
                    <select value={seleccionEnvio} onChange={(e) => setEnvio(e.target.value)}>
                        <option value="retiro">Retiro en Sucursal</option>
                        <option value="envio">Envío a domicilio</option>
                        <option value="seleccionarEnvio">Seleccionar envío...</option>
                    </select>
                </div>
                <div className="cart-descuento">
                    <input 
                        type="text" 
                        placeholder="Código de descuento" 
                        value={codigoDescuento} 
                        onChange={(e) => setCodigoDescuento(e.target.value)} 
                        onKeyDown={handleKeyDown}
                    />
                    {descuentoAplicado > 0 && (
                        <p>Descuento aplicado: $ {descuentoAplicado.toFixed(2)}</p>
                    )}
                    <p>Total: ${precioConDescuento.toFixed(2)}</p>
                </div>
                <div className="cart-total">
                    <button onClick={handleCompra}>Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;