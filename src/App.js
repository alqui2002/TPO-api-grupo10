import { Routes, Route, HashRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react';

import './assets/css/styles.css'

import Navbar from "./components/Navbar.jsx";

import Home from './views/Home.jsx'
import Admin from './views/Admin.jsx'
import Cart from './views/Cart.jsx'
import Products from './views/Products.jsx'

function App() {

  const [isNavHidden, setIsNavHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            if (isNavHidden) {
                navBar.style.transform = 'translateY(0)';
                setIsNavHidden(false);
            }
        } else {
            if (!isNavHidden) {
                navBar.style.transform = 'translateY(-100%)';
                setIsNavHidden(true);
            }
        }
        setPrevScrollPos(currentScrollPos);
    };

    const navBar = document.querySelector('nav');
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavHidden, prevScrollPos,]);

  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/cart' element={<Cart productosSeleccionados={productosSeleccionados} setProductosSeleccionados={setProductosSeleccionados}/>} />
        <Route
          path='/products'
          element={<Products productosSeleccionados={productosSeleccionados} setProductosSeleccionados={setProductosSeleccionados} />}
        />      </Routes>
    </HashRouter>
  );
  
}


export default App;
