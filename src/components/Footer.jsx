import React from 'react';
import instagram from '../assets/img/instagram.png';
import twitter from '../assets/img/twitter.png';
import tiktok from '../assets/img/tiktok.png';
import logo from '../assets/img/logo.png';
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
                <img src={logo} alt="Logo" />
            </div>
            <div className="copyright">
                <h3>
                © 2024 Spin City. Todos los derechos reservados.
                </h3>
            </div>
        </footer>
    );
}

export default Footer;
