import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png";

const Navbar = () => {
    return (
        <nav className='d-flex align-items-center justify-content-center background-color-2'>
            <img src={logo}></img>
            <ul className='nav-links d-flex color-3 p-0'>
                <li><Link to='/' onClick={() => window.scrollTo(0, 0)}>Inicio</Link></li>
                <li><Link to='/Products' onClick={() => window.scrollTo(0, 0)}>Productos</Link></li>
                <li><Link to={{ pathname: '/Cart' }} onClick={() => window.scrollTo(0, 0)}>Carrito</Link></li>
                <li><Link to='/Admin' onClick={() => window.scrollTo(0, 0)}>Admin</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
