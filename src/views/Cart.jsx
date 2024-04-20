import React, { useState } from 'react';
import ProductList from "../components/ProductList.jsx";

import inRainbows from "../assets/img/Inrainbowscover.png";
import rumours from "../assets/img/Rumourscover.png";
import folklore from "../assets/img/folklorecover.png";
import civilizacion from "../assets/img/lospiojoscivilizacion.webp";
import redTS from "../assets/img/redcover.jpeg";


const Cart = () => {
    const [seleccionEnvio, setEnvio] = useState(''); 
    const [descuentos, setDescuentos] = useState(false);


    const [cartItems, setCart] = useState([
        { id: 1, title: 'In Rainbows', subtitle: 'Radiohead', imageSrc: inRainbows, price: '80.000', genero: "Alternativo" },
        { id: 2, title: 'Folklore', subtitle: 'Taylor Swift', imageSrc: folklore, price: '90.000', genero: 'indie Folk' },
        { id: 3, title: 'Rumours', subtitle: 'Fleetwood Mac', imageSrc: rumours, price: '85.000', genero: 'Rock' },
        { id: 4, title: 'Civilización', subtitle: 'Los Piojos', imageSrc: civilizacion, price: '75.000', genero: 'Nacional' },
        { id: 5, title: "Red (Taylor's Version)", subtitle: 'Taylor Swift', imageSrc: redTS, price: '70.000', genero: 'Pop' },
    ]);

    const alertaEliminado = () => {
        alert("Producto Eliminado");
        console.log (cartItems)
    };

    const handleClick = (productId) => {
        setCart(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const compraExitosa = () => {
        alert("Compra realizada con exito!");
        console.log (cartItems)
    };


    const handleCompra = () => {
        compraExitosa();
    };

    const totalPrice = cartItems.reduce((acc, curr) => acc + parseInt(curr.price), 0);


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
                        {cartItems.map(product => (
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
                        </select>
                </div>
                <div className="cart-total">
                    <p> Descuentos: $ {(descuentos ? 7500 : 0)}.000</p> 
                    <p> Total: ${totalPrice + (seleccionEnvio === 'retiro' ? 0 : 7500)}</p>
                    <button onClick={handleCompra}>Finalizar Compra</button>
                </div>
                
            </div>
        </div>
    );
}

export default Cart;
