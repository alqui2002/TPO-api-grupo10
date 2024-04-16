import React from 'react';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';


const Home = () => {
    return (
        <div>
            {Navbar}
            <section id="home-banner" className="d-flex justify-content-center align-items-center">
                <h1 className="white-1">Explora la música en vinilo</h1>
            </section>
            <main id="home-novedades" className="background-color-0 d-flex flex-column justify-content-center align-items-center">
                <h2 className="black-1 fw-bold">Novedades</h2>
                <div id="relleno"></div>
                <div className='home-container-cards'>
                    <div className="home">
                        <Card
                            imageSrc="../assets/img/Inrainbowscover.png"
                            title="In Rainbows"
                            subtitle="Radiohead"
                            price="80.000$"
                        />
                    </div>
                    <div className="home">
                        <Card
                            imageSrc="ruta/a/la/imagen.jpg"
                            title="Nombre del Producto"
                            subtitle="Descripción corta del producto"
                            price="29.99"
                        />
                    </div>

                </div>
                
                <button className="button-1 black-1">
                    Ver catálogo
                </button>
            </main>
            <section id="home-quienes-somos" className="background-white-1 d-flex justify-content-center align-items-center">
                <div id="home-background-1" className="w-50 h-100">
                </div>
                <div className="w-50 d-flex flex-column justify-content-center align-items-center">
                    <h2 className="black-1 fw-bold">¿Quiénes somos?</h2>
                    <p>
                        Desde 1967 nos dedicamos a preservar la magia intemporal de la música a través de uno de los formatos más
                        queridos y auténticos: el vinilo. Con una pasión arraigada por el sonido analógico y la nostalgia de las
                        portadas artísticas, ofrecemos una cuidadosa selección de álbumes que abarcan géneros, décadas y emociones.
                    </p>
                </div>
            </section>
            
            <section id="home-contacto" className="background-color-0 d-flex flex-column justify-content-center align-items-center">
                <h2 className="black-1 fw-bold">Contacto</h2>
                <div id="contacto-container" className="background-color-1 d-flex justify-content-center align-items-center p-5">
                    <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <iframe id="home-map" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Joaquín V. González 1125 CABA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                    </div>
                    <div className="d-flex flex-column justify-content-end align-items-start ms-5 h-100">
                        <p>contacto@spincity.com</p>
                        <p>Joaquín V. González 1125 CABA</p>
                        <p>4862-9345</p>
                    </div>
                </div>
            </section>
            

            {Footer}
        </div>
    );
}

export default Home;
