import React from 'react';
import instagram from '../assets/img/instagram.png';
import twitter from '../assets/img/twitter.png';
import tiktok from '../assets/img/tiktok.png';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <footer className="d-flex align-items-center w-100">
            <div className="footer-section social-icons">
                <a href="#"><img src={instagram}/></a>
                <a href="#"><img src={twitter} /></a>
                <a href="#"><img src={tiktok} /></a>
            </div>
            <div className="footer-section logo text-align-center">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer-section copyright">
                <h3>© 2024 Spin City. Todos los derechos reservados.</h3>
            </div>
        </footer>
    );
}

export default Footer;
