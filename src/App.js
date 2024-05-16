import { Routes, Route, HashRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react';

import Navbar from "./components/Navbar.jsx";
import Login from './views/Login.jsx'
import Pago from './views/Pago.jsx';
import Home from './views/Home.jsx';
import Admin from './views/Admin.jsx';
import Cart from './views/Cart.jsx';
import Products from './views/Products.jsx';
import ProdDescripcion from "./views/ProdDescripcion.jsx";

import './assets/css/styles.css';
import './assets/css/admin.css';
import './assets/css/card.css';
import './assets/css/cart.css';
import './assets/css/footer.css';
import './assets/css/home.css';
import './assets/css/login.css';
import './assets/css/navbar.css';
import './assets/css/pago.css';
import './assets/css/products.css';

function App() {

  //----------------------------------------- MOSTRAR/OCULTAR NAVBAR--------------------------------------------------------------

  const [isNavHidden, setIsNavHidden] = useState(false); //Estado que determina si la navbar está oculta
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset); //Nos dice si el ultimo scroll fue para arriba o para abajo
  
  useEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) { //Si estoy en una posicion mas alta que antes (en el scroll vertical) y la navbar esta oculto muestro la navbar
            if (isNavHidden) {
                navBar.style.transform = 'translateY(0)'; //Muestra la navbar
                setIsNavHidden(false);
            }
        } else { //Si estoy en una posicion mas baja que antes y la navbar no está oculta escondo la navbar
            if (!isNavHidden) { 
                navBar.style.transform = 'translateY(-100%)';
                setIsNavHidden(true);
            }
        }

        setPrevScrollPos(currentScrollPos); //Actualiza la posición de scroll
    };

    const navBar = document.querySelector('nav');
    window.addEventListener('scroll', handleScroll); //Listener que llama a handleScroll cada vez que el usuario mueva la rueda del mouse

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavHidden, prevScrollPos,]);

  //-------------------------------------------------------------------------------------------------------------------------------

  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  return (
    <HashRouter>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/payment' element={<Pago />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProdDescripcion />} />
      </Routes>
    </HashRouter>
  );
  
}


export default App;
