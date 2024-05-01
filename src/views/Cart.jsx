import React, { useState, useEffect } from 'react';
import ProductList from "../components/ProductList.jsx";

const Cart = ({ productosSeleccionados, setProductosSeleccionados }) => {
    const [seleccionEnvio, setEnvio] = useState('seleccionarEnvio');
    const [codigoDescuento, setCodigoDescuento] = useState('');
    const [descuentoAplicado, setDescuentoAplicado] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [precioConDescuento, setPrecioConDescuento] = useState(0);
    const [productoEliminado, setProductoEliminado] = useState("opacity-0-height-0");

    const handleClick = async (productId) => {
        setProductosSeleccionados(prevItems => prevItems.filter(item => item.id !== productId));
        setProductoEliminado("disappear");
        await new Promise(resolve => setTimeout(resolve, (2999)));
        setProductoEliminado("opacity-0-height-0");
    };

    const compraExitosa = () => {
        alert("Compra realizada con éxito!");
        console.log (productosSeleccionados);
    };

    const handleCompra = () => {
        compraExitosa();
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
        const precioConDescuento = totalPrice - descuentoAplicado;
        setPrecioConDescuento(precioConDescuento);
    }, [totalPrice, descuentoAplicado]);

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
                            handleClick={() => { handleClick(product.id); }}
                        />
                    ))}
                </div>
            </div>
            <div className='cart-checkout d-flex'>
                <div className="cart-envio">
                    <h3 className="text-center pb-2">Seleccionar tipo de envío:</h3>
                    <select value={seleccionEnvio} onChange={(e) => setEnvio(e.target.value)}>
                        <option value="retiro">Retiro en Sucursal</option>
                        <option value="envio">Envío a domicilio</option>
                        <option value="seleccionarEnvio">Seleccionar envío...</option>
                    </select>
                </div>
                <div className="cart-descuento">
                    <h3 className="text-center pb-2">Ingrese codigo de descuento:</h3>
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
            <div id="eliminar-producto-alert" className={`${productoEliminado} background-color-4 d-flex align-items-center`}>
                <h5 className="white-1 px-3 pt-3 pb-2">Producto eliminado.</h5>
                <button className="background-color-4" onClick={() => setProductoEliminado("opacity-0-height-0")}>
                    <h5 className="white-1 px-3 pt-3 pb-2">X</h5>
                </button>
            </div>
        </div>
    );
}

export default Cart;