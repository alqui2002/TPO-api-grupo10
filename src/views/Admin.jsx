import React, { useState, useEffect } from 'react';
import ProductList from "../components/ProductList.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateVinilo } from '../components/Redux/adminAPI.js';
import "../assets/css/admin.css";

const Admin = ({ isAdmin }) => {
    const [products, setProductos] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [filtrados, setFiltrados] = useState([]);
    const [newProduct, setNewProduct] = useState({ title: '', subtitle: '', price: '', imageSrc: '', description: '', genero: '', stock: '' });
    const [busquedaProduct, setBusquedaProduct] = useState({ title: '' });
    const [editingProduct, setEditing] = useState(null);

    useEffect(() => {
        const fetchVinilos = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/vinilos');
                if (!response.ok) {
                    throw new Error('Error al obtener los vinilos');
                }
                const data = await response.json();
                setProductos(data.content);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchVinilos();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleChangeBusqueda = (e) => {
        const { name, value } = e.target;
        setBusquedaProduct({ ...busquedaProduct, [name]: value });
    };

    const handleSearch = () => {
        const filtrados = products.filter(product => {
            return product.title.toLowerCase().includes(busquedaProduct.title.toLowerCase());
        });
        setFiltrados(filtrados);
        setEditing(true);
    };

    const handleEliminar = (productToDelete) => {
        setProductos(prevItems => prevItems.filter(item => item.id !== productToDelete));
        handleSearch();
    };

    const handleAgregar = async () => {
        try {
            const formData = new FormData();
            formData.append('title', newProduct.title);
            formData.append('subtitle', newProduct.subtitle);
            formData.append('description', newProduct.description);
            formData.append('imageFile', newProduct.imageSrc); // Assuming imageSrc is a file object
            formData.append('price', newProduct.price);
            formData.append('genero', newProduct.genero);
            formData.append('stock', newProduct.stock);

            const response = await fetch(`http://localhost:8080/api/vinilos/add-vinilo`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error al agregar el vinilo');
            }

            const nuevoAlbum = await response.json();
            setProductos([...products, nuevoAlbum]);
        } catch (error) {
            console.error('Error al agregar el vinilo:', error);
        }
    };

    const handleEdit = (productId, updatedValues) => {
        const productosActualizados = products.map(product =>
            product.id === productId ? { ...product, ...updatedValues } : product
        );

        setProductos(productosActualizados);
        dispatch(updateVinilo({ productId, ...updatedValues }))
            .unwrap()
            .then(() => {
                console.log(`Producto con id ${productId} actualizado correctamente`);
            })
            .catch(err => {
                console.error('Error actualizando vinilo:', err);
            });
    };

    useEffect(() => {
        if (editingProduct === true) handleSearch();
    }, [products]);

    if (!isAdmin) {
        return null;
    }

    return (
        <div className='admin'>
            <h2 className="ps-4 pb-4">Admin</h2>
            <section className='admin-filter'>
                <h3>Filtrar Productos</h3>
                <input type="text" name="title" placeholder="Título" value={busquedaProduct.title} onChange={handleChangeBusqueda} />
                <button type='button' onClick={handleSearch}>Buscar Albúm</button>
                {filtrados.map(product => (
                    <ProductList
                        key={product.id}
                        id={product.id}
                        imageSrc={product.imageSrc}
                        title={product.title}
                        subtitle={product.subtitle}
                        price={product.price}
                        showEdit={true}
                        handleEdit={(updatedValues) => handleEdit(product.id, updatedValues)}
                        handleClick={() => handleEliminar(product.id)}
                    />
                ))}
            </section>
            <section id="admin-form-new" className="background-color-1 admin-section-new w-100">
                <h3>Agregar Nuevo Producto</h3>
                <form className="py-2">
                    <input type="text" name="title" placeholder="Título" value={newProduct.title} onChange={handleChange} />
                    <input type="text" name="subtitle" placeholder="Artista" value={newProduct.subtitle} onChange={handleChange} />
                    <input type="text" name="price" placeholder="Precio" value={newProduct.price} onChange={handleChange} />
                    <input type="text" name="description" placeholder="Descripción" value={newProduct.description} onChange={handleChange} />
                    <input type="text" name="genero" placeholder="Género" value={newProduct.genero} onChange={handleChange} />
                    <input type="number" name="stock" placeholder="Stock" value={newProduct.stock} onChange={handleChange} />
                    <input type="file" name="imageSrc" onChange={(e) => setNewProduct({ ...newProduct, imageSrc: e.target.files[0] })} />
                </form>
                <button type="button" onClick={handleAgregar}>Agregar Vinilo</button>
            </section>
        </div>
    );
}

export default Admin;
