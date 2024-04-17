import React from 'react';
import inRainbows from "../assets/img/Inrainbowscover.png";
import rumours from "../assets/img/Rumourscover.png";
import folklore from "../assets/img/folklorecover.png";
import civilizacion from "../assets/img/lospiojoscivilizacion.webp"

import Card from '../components/Card.jsx';

const Products = () => {
    
    const products = [
        { id: 1, title: 'In Rainbows',subtitle:'Radiohead',imageSrc:inRainbows,price: '80.000' },
        { id: 2, title: 'Folklore', subtitle:'Taylor Swift',imageSrc:folklore,price: '90.000' },
        { id: 3, title: 'Rumours', subtitle:'Fleetwood Mac',  imageSrc:rumours,price: '85.000' },
        { id: 4, title: 'Civilización', subtitle:'Los Piojos',  imageSrc:civilizacion,price: '70.000' },

    ];
    
    return (
        <div>
            <section id="prod-banner" className="d-flex justify-content-center align-items-center">
                <h1 className="white-1">Vinilos</h1>
            </section>
            <main className='prod-name'>
                <side className="prod-categorias">
                    <h3>Rock</h3>
                    <h3>Blues</h3>
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
                                />
                            ))}
                    </div>
                </section>
            </main>
            
        </div>
    );
}

export default Products;
