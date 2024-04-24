import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';
import inRainbows from "../assets/img/Inrainbowscover.png";
import rumours from "../assets/img/Rumourscover.png";
import folklore from "../assets/img/folklorecover.png";
import civilizacion from "../assets/img/lospiojoscivilizacion.webp";
import ohms from '../assets/img/ohms.jpg';
import am from '../assets/img/am.jpg';

const Home = () => {
    return (
        <div>
            <section id="home-banner" className="d-flex justify-content-center align-items-center">
                <div className="padding-nav"></div>
                <h1 className="white-1 padding-nav-title">Explora la música en vinilo</h1>
            </section>
            <main id="home-novedades" className="background-color-0 d-flex flex-column justify-content-center align-items-center">
                <h2 className="black-1 fw-bold">Novedades</h2>
                <Carousel>
                    <Carousel.Item>
                        <div className='home-container-cards d-flex justify-content-center align-items-center'>
                            <div className="home-card d-flex justify-content-center align-items-center">
                                <Card
                                    imageSrc={inRainbows}
                                    title="In Rainbows"
                                    subtitle="Radiohead"
                                    price="80.000"
                                />
                            </div>
                            <div className="home-card d-flex justify-content-center align-items-center">
                                <Card
                                    imageSrc={rumours}
                                    title="Rumours"
                                    subtitle="Fleetwood Mac"
                                    price="85.000"
                                />
                            </div>
                            <div className="home-card d-flex justify-content-center align-items-center">
                                <Card
                                    imageSrc={folklore}
                                    title="Folklore"
                                    subtitle="Taylor Swift"
                                    price="90.000"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='home-container-cards d-flex justify-content-center align-items-center'>
                            <div className="home-card d-flex justify-content-center align-items-center">
                                <Card
                                    imageSrc={civilizacion}
                                    title="Civilización"
                                    subtitle="Los Piojos"
                                    price="75.000"
                                />
                            </div>
                            <div className="home-card d-flex justify-content-center align-items-center">
                                <Card
                                    imageSrc={ohms}
                                    title="Ohms"
                                    subtitle="Deftones"
                                    price="85.000"
                                />
                            </div>
                            <div className="home-card d-flex justify-content-center align-items-center">
                                <Card
                                    imageSrc={am}
                                    title="AM"
                                    subtitle="Arctic Monkeys"
                                    price="90.000"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <Link to="/Products" className="button-1 black-1 mb-4 mt-3" onClick={() => window.scrollTo(0, 0)}>Ver catálogo</Link>
            </main>
            <section id="home-quienes-somos" className="background-white-1 d-flex justify-content-center align-items-center">
                <div id="home-background-1" className="w-50 h-100"></div>
                <div className="w-50 d-flex flex-column justify-content-center align-items-center">
                    <h2 className="black-1 fw-bold">¿Quiénes somos?</h2>
                    <p>Desde 1967 nos dedicamos a preservar la magia atemporal de la música a través de uno de los formatos más queridos y auténticos: el vinilo. Con una pasión arraigada por el sonido analógico y la nostalgia de las portadas artísticas, ofrecemos una cuidadosa selección de álbumes que abarcan géneros, décadas y emociones.</p>
                </div>
            </section>
            <section id="home-contacto" className="background-color-0 d-flex flex-column justify-content-center align-items-center">
                <h2 className="black-1 fw-bold">Contacto</h2>
                <div id="contacto-container" className="background-color-1 d-flex justify-content-center align-items-center p-5">
                    <div className="d-flex justify-content-center align-items-center">
                        <div>
                            <iframe id="home-map" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Joaquín V. González 1125 CABA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-end align-items-start ms-5 h-100">
                        <p>contacto@spincity.com</p>
                        <p>Joaquín V. González 1125 CABA</p>
                        <p>4862-9345</p>
                    </div>
                </div>
            </section>
            <div className="footer-padding background-color-0"></div>
        </div>
    );
}

export default Home;
