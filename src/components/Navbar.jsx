import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../components/Redux/counter';


import logo from "../assets/img/logo.png";
import "../assets/css/navbar.css"
const Navbar = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <nav className='d-flex align-items-center justify-content-between background-color-2'>
            <div className="d-flex align-items-center">
                <img src={logo} alt="Logo" />
            </div>
            <ul className='nav-links d-flex color-3 p-0'>
                <li><Link to='/' onClick={() => window.scrollTo(0, 0)}>Inicio</Link></li>
                <li><Link to='/Products' onClick={() => window.scrollTo(0, 0)}>Productos</Link></li>
                <li><Link to={{ pathname: '/Cart' }} onClick={() => window.scrollTo(0, 0)}>Carrito</Link></li>
                <li><Link to='/Admin' onClick={() => window.scrollTo(0, 0)}>Admin</Link></li>
            </ul>
            <div className='nav-links color-3 p-0 m-0'><Link to='/Login' onClick={() => window.scrollTo(0, 0)}>Login/Registro</Link></div>
            <div>
                <div>Contador: {count}</div>
            </div>
        </nav>
    );
}

export default Navbar;
