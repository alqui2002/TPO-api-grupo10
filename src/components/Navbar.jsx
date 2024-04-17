import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png";

const Navbar = () => {
    return (
        <nav className='background-color-2'>
        
            <ul className='nav-links color-3' >
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/Products'>Productos</Link></li>
                <li><Link to='/Cart'>Carrito</Link></li>
                <li><Link to='/Admin'>Admin</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
