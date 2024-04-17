import React from 'react';
import instagram from '../assets/img/instagram.png';
import twitter from '../assets/img/twitter.png';
import tiktok from '../assets/img/tiktok.png';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="#"><img src={instagram}/></a>
                <a href="#"><img src={twitter} /></a>
                <a href="#"><img src={tiktok} /></a>
            </div>
            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="copyright">
                © 2024 Tu Empresa. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;
