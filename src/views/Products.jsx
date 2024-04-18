import React, { useState } from 'react';
import inRainbows from "../assets/img/Inrainbowscover.png";
import rumours from "../assets/img/Rumourscover.png";
import folklore from "../assets/img/folklorecover.png";
import civilizacion from "../assets/img/lospiojoscivilizacion.webp";
import redTS from "../assets/img/redcover.jpeg";

import Card from '../components/Card.jsx';

const Products = () => {
    const [cartCount, setCartCount] = useState(0);

    const handleClick = () => {
        setCartCount(cartCount + 1);
    }

    const products = [
        { id: 1, title: 'In Rainbows',subtitle:'Radiohead',imageSrc:inRainbows,price: '80.000', genero:"Alternativo"},
        { id: 2, title: 'Folklore', subtitle:'Taylor Swift',imageSrc:folklore,price: '90.000',genero:'indie Folk' },
        { id: 3, title: 'Rumours', subtitle:'Fleetwood Mac',  imageSrc:rumours,price: '85.000', genero:'Rock' },
        { id: 4, title: 'Civilización', subtitle:'Los Piojos',  imageSrc:civilizacion,price: '75.000' , genero:'Nacional'},
        { id: 5, title: "Red (Taylor's Version)", subtitle:'Taylor Swift',  imageSrc:redTS,price: '70.000',genero:'Pop' },
        { id: 6, title: "Red (Taylor's Version)", subtitle:'Taylor Swift',  imageSrc:redTS,price: '70.000', genero:'Pop' },
    ];
    
    return (
        <div>
            <section id="prod-banner" className="d-flex justify-content-center align-items-center">
                <div className="padding-nav"></div>
                <h1 className="white-1 padding-nav-title">Vinilos</h1>
            </section>
            <main className='prod-name'>
                <side className="prod-categorias">
                    <h3>Rock</h3>
                    <h3>Alternativo</h3>
                    <h3>Pop</h3>
                    <h3>Nacional</h3>
                    <h3>Bandas Sonoras</h3>
                </side>
                <section className='prod-productos'>
                    <h3>Nuestros vinilos más escuchados: </h3>
                    <div className='prod-cards'>
                        {products.map(product => (
                                <Card 
                                    key={product.id} 
                                    imageSrc={product.imageSrc}
                                    title={product.title}
                                    subtitle={product.subtitle}
                                    price={product.price}
                                    handleClick = {handleClick}
                                />
                            ))}
                    </div>
                </section>
            </main>
            
        </div>
    );
}

export default Products;
