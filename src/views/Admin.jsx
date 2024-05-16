import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/productsSlice.js';

import ProductListAdmin from '../components/ProductListAdmin.jsx';

const Admin = () => {
    
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.accounts.currentUser);
    const products = useSelector(state => state.products.products);
    const isAdmin = currentUser && currentUser.isAdmin;

    const [newTitle, setNewTitle] = useState(null);
    const [newSubtitle, setNewSubtitle] = useState(null);
    const [newPrice, setNewPrice] = useState(null);
    const [newGenero, setNewGenero] = useState(null);
    const [newDescription, setNewDescription] = useState(null);

    const [filtrados, setFiltrados] = useState([]);
    const [busquedaProduct, setBusquedaProduct] = useState('');

    const handleSearch = () => {
        const prodFiltrados = products.filter(product => {
            return product.title.toLowerCase().includes(busquedaProduct.toLowerCase());
        });
        setFiltrados(prodFiltrados);
    };

    const calculateNewProductId = () => {
        const lastProductId = products.length > 0 ? products[products.length - 1].id : 0;
        return lastProductId + 1;
    };

    const handleAddProduct = () => {
        const newProduct = {
            id: calculateNewProductId(),
            title: newTitle,
            subtitle: newSubtitle,
            image: null,
            price: newPrice,
            genero: newGenero,
            description: newDescription 
        };

        dispatch(addProduct(newProduct));

        setNewTitle('');
        setNewSubtitle('');
        setNewPrice('');
        setNewGenero('');
        setNewDescription('');
    };

    if (isAdmin) return (
        <div className='admin'>
            <h2 className="ps-4 pb-4">Admin</h2>
            <section className='admin-filter'>
                <h3>Filtrar Productos</h3>
                <input type="text" name="titleSearch" placeholder="Título" value={busquedaProduct} onChange={(e) => setBusquedaProduct(e.target.value)}/>
                <button className="ms-3" type="button" onClick={handleSearch} ><h5 className="mb-1">Buscar</h5></button>
                {filtrados.map(product => (
                    <ProductListAdmin id={product.id} />
                ))}
            </section>
            <section id="admin-form-new" className="background-color-1 admin-section-new w-100">
                    <h3>Agregar Nuevo Producto</h3>
                    <form className="py-2">
                        <input type="text" name="title" placeholder="Título" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                        <input type="text" name="subtitle" placeholder="Artista" value={newSubtitle} onChange={(e) => setNewSubtitle(e.target.value)}/>
                        <input type="text" name="price" placeholder="Precio" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
                        <input type="text" name="genero" placeholder="Género" value={newGenero} onChange={(e) => setNewGenero(e.target.value)}/>
                        <textarea id="admin-textarea" type="text" name="description" placeholder="Descripción" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/>
                    </form>
                    <button type="button" onClick={handleAddProduct}>Agregar Producto</button>
            </section>
        </div>
    );

    if (!isAdmin) return (
        <div className="vh-100 d-flex justify-content-center align-items-center container">
            <div className="padding-nav"></div>
            <h1 className="color-0 text-center">Solo puedes acceder a esta página si eres admin :(</h1>
        </div>
    )

}

export default Admin;