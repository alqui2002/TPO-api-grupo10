import React, { useState } from 'react';

import inRainbows from "../assets/img/Inrainbowscover.png";
import rumours from "../assets/img/Rumourscover.png";
import folklore from "../assets/img/folklorecover.png";
import civilizacion from "../assets/img/lospiojoscivilizacion.webp";
import redTS from "../assets/img/redcover.jpeg";
import ttps from "../assets/img/ttps.jpeg"
import uvst from "../assets/img/unVeranoSinTi.jpeg"
import ohms from "../assets/img/ohms.jpg"
import am from "../assets/img/am.jpg"

import Card from '../components/Card.jsx';


const Products = ({ productosSeleccionados, setProductosSeleccionados }) => {
    const [colorTodo, setColorTodo] = useState("color-3");
    const [colorRock, setColorRock] = useState("black-1");
    const [colorAlternativo, setColorAlternativo] = useState("black-1");
    const [colorPop, setColorPop] = useState("black-1");
    const [colorNacional, setColorNacional] = useState("black-1");

    const products = [
        { id: 1, title: 'In Rainbows', subtitle: 'Radiohead', imageSrc: inRainbows, price: 80.000, genero: "Alternativo" },
        { id: 2, title: 'Folklore', subtitle: 'Taylor Swift', imageSrc: folklore, price: 90.000, genero: 'indie Folk' },
        { id: 3, title: 'Rumours', subtitle: 'Fleetwood Mac', imageSrc: rumours, price: 85.000, genero: 'Rock' },
        { id: 4, title: 'Civilización', subtitle: 'Los Piojos', imageSrc: civilizacion, price: 75.000, genero: 'Nacional' },
        { id: 5, title: "Red (Taylor's Version)", subtitle: 'Taylor Swift', imageSrc: redTS, price: 70.000, genero: 'Pop' },
        { id: 6, title: "The Tortured Poets Department: The Anthology ", subtitle: 'Taylor Swift', imageSrc: ttps, price: 100.000, genero: 'Pop' },
        { id: 7, title: "Un Verano Sin Ti", subtitle: 'Bad Bunny', imageSrc: uvst, price: 120.000, genero: 'Pop' },
        { id: 8, title: "Ohms", subtitle: 'Deftones', imageSrc: ohms, price: 120.000, genero: 'Rock' },
        { id: 9, title: "AM", subtitle: 'Arctic Monkeys', imageSrc: am, price: 90.000, genero: 'Rock' },
    ];

    const [filtroGenero, setFiltroGenero] = useState(null);
    const [filtrados, setFiltrados] = useState([]);
    const [newProduct, setNewProduct] = useState({ query: '' });

    const handleProductClick = (product) => {
        setProductosSeleccionados([...productosSeleccionados, product]);
    };

    const cambiarColor = (genero) => {
        setColorTodo("black-1");
        setColorRock("black-1");
        setColorAlternativo("black-1");
        setColorPop("black-1");
        setColorNacional("black-1");
        switch (genero) {
            case "":
                setColorTodo("color-3");
                break;
            case "Rock":
                setColorRock("color-3");
                break;
            case "Alternativo":
                setColorAlternativo("color-3");
                break;
            case "Pop":
                setColorPop("color-3");
                break;
            case "Nacional":
                setColorNacional("color-3");
                break;
            default:
                break;
        }
    };

    const filtrarPorGenero = (genero) => {
        cambiarColor(genero);
        setFiltroGenero(genero);
        setFiltrados(products.filter(product => !genero || product.genero === genero));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ [name]: value });
        const filtrados = products.filter(product =>
            product.title.toLowerCase().includes(value.toLowerCase()) ||
            product.subtitle.toLowerCase().includes(value.toLowerCase())
        );
        setFiltrados(filtrados);
        setFiltroGenero(null); // Reiniciar filtro de género al hacer una búsqueda
    };

    const productosMostrados = filtrados.length > 0 ? filtrados : products.filter(product => !filtroGenero || product.genero === filtroGenero);

    return (
        <div>
            <section id="prod-banner" className="d-flex justify-content-center align-items-center">
                <div className="padding-nav"></div>
                <h1 className="white-1 padding-nav-title">Vinilos</h1>
            </section>
            <main className='prod-name'>
                <div className='prod-contenido'>
                    <aside className="prod-categorias">
                        <h4 className="hover-0 mx-0">Buscar productos:</h4>
                        <div className='prod-busqueda d-flex align-items-center'>
                            <input type="text" name="query" placeholder="Título o Artista" value={newProduct.query || ''} onChange={handleChange} />
                        </div>
                        <h4 className="mt-4 mb-3 hover-0 mx-0">Filtrar por género:</h4>
                        <h4 className={colorRock} onClick={() => filtrarPorGenero('Rock')}>Rock</h4>
                        <h4 className={colorAlternativo} onClick={() => filtrarPorGenero('Alternativo')}>Alternativo</h4>
                        <h4 className={colorPop} onClick={() => filtrarPorGenero('Pop')}>Pop</h4>
                        <h4 className={colorNacional} onClick={() => filtrarPorGenero('Nacional')}>Nacional</h4>
                        <h4 className={colorTodo} onClick={() => filtrarPorGenero('')}>Ver Todo</h4>
                    </aside>
                    <section className='prod-productos'>
                        <h3>Nuestros vinilos más escuchados:</h3>
                        <div className='prod-cards'>
                            {productosMostrados.map(product => (
                                <Card
                                    key={product.id}
                                    imageSrc={product.imageSrc}
                                    title={product.title}
                                    subtitle={product.subtitle}
                                    price={product.price}
                                    handleClick={() => handleProductClick(product)}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <div id="footer-margin"></div>
        </div>
    );
}

export default Products;
