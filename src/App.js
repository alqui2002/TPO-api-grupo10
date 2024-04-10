import { Routes, Route, HashRouter } from "react-router-dom";

import './assets/css/styles.css'

import Home from './views/Home.jsx'
import Admin from './views/Admin.jsx'
import Cart from './views/Cart.jsx'
import Products from './views/Products.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
