import { Routes, Route, BrowserRouter } from "react-router-dom";
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

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
