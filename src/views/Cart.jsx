import React, { useState } from 'react';
import ProductList from "../components/ProductList.jsx";
import Footer from '../components/Footer.jsx';

import inRainbows from "../assets/img/Inrainbowscover.png";
import rumours from "../assets/img/Rumourscover.png";
import folklore from "../assets/img/folklorecover.png";
import civilizacion from "../assets/img/lospiojoscivilizacion.webp";
import redTS from "../assets/img/redcover.jpeg";


const Cart = ({ productosSeleccionados, setProductosSeleccionados }) => {
    const [seleccionEnvio, setEnvio] = useState('seleccionarEnvio'); 
    const [descuentos, setDescuentos] = useState(false);


    
    const alertaEliminado = () => {
        alert("Producto Eliminado");
        console.log (productosSeleccionados)
    };

    const handleClick = (productId) => {
        setProductosSeleccionados(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const compraExitosa = () => {
        alert("Compra realizada con exito!");
        console.log (productosSeleccionados)
    };


    const handleCompra = () => {
        compraExitosa();
    };

    const totalPrice = productosSeleccionados.reduce((acc, curr) => acc + parseInt(curr.price), 0);


    return (

        <div className='cart'>
            <section id="cart-banner" className="d-flex justify-content-center align-items-center">
                <div className="padding-nav"></div>
                <h1 className="white-1 padding-nav-title">Carrito</h1>
            </section>
            
            <div className='cart-items'>
                    <div className="productList-header">
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
            <div className='cart-checkout'>
                <div className="cart-envio">
                        <h3>Seleccionar tipo de envío:</h3>
                        <select value={seleccionEnvio} onChange={(e) => setEnvio(e.target.value)}>
                            <option value="retiro">Retiro en Sucursal</option>
                            <option value="envio">Envío a domicilio</option>
                            <option value="seleccionarEnvio">Seleccionar envio...</option>

                        </select>
                </div>
                <div className="cart-total">
                    <p> Descuentos: $ {(descuentos ? 7500 : 0)}.000</p> 
                    <p> Total: ${totalPrice + (seleccionEnvio === 'envio' ? 7500 : 0)}.000</p>
                    <button onClick={handleCompra}>Finalizar Compra</button>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}

export default Cart;
