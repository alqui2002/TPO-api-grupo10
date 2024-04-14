import React from 'react';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

import img1 from '../assets/img/img-1b.png'

const Home = () => {
    return (
        <div>
            {Navbar}
            <section id="home-banner" className="d-flex justify-content-center align-items-center">
                <h1 className="white-1">Explora la música en vinilo</h1>
            </section>
            <main id="home-novedades" className="background-color-1 d-flex flex-column justify-content-center align-items-center">
                <h2 className="black-1 fw-bold">Novedades</h2>
                <div id="relleno"></div>
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
            <section id="home-contacto" className="background-color-1 d-flex flex-column justify-content-center align-items-center">
                <h2 className="black-1 fw-bold">Contacto</h2>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="h-100 d-flex justify-content-center align-items-center">
                        <iframe id="home-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.2786785924445!2d-58.487919623391555!3d-34.62239725848646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9ea024ee50f%3A0x571651f7460fee3!2sComuna%2011%2C%20Joaqu%C3%ADn%20V.%20Gonz%C3%A1lez%201125%2C%20C1407%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1713135517454!5m2!1ses!2sar" loading="lazy"></iframe>
                    </div>
                    <div className="d-flex flex-column justify-content-end align-items-start ms-5">
                        <p>Teléfono: 4862-9345</p>
                        <p>contacto@spincity.com</p>
                        <p>Joaquín V. González 1125 CABA</p>
                    </div>
                </div>
            </section>
            {Footer}
        </div>
    );
}

export default Home;
