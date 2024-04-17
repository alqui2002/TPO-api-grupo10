import React, { useState } from 'react';


const Admin = () => {
    
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ id: '', title: '', subtitle: '', price: '', imageSrc: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault(); // Evitar comportamiento de envío predeterminado
        setProducts([...products, { ...newProduct, id: products.length + 1 }]);
        setNewProduct({ id: '', title: '', subtitle: '', price: '', imageSrc: '' });
    };

    
    return (
        <section className="Admin-form">
                <h2>Agregar Nuevo Producto</h2>
                <form>
                    <input type="text" name="title" placeholder="Título" value={newProduct.title} onChange={handleChange}/>
                    <input type="text" name="subtitle" placeholder="Subtítulo" value={newProduct.subtitle} onChange={handleChange} />
                    <input type="text" name="price" placeholder="Precio" value={newProduct.price} onChange={handleChange}  />
                    <input type="text" name="imageSrc" placeholder="URL de la imagen" value={newProduct.imageSrc} onChange={handleChange} />
                    <button type="submit" onClick={handleClick}>Agregar Producto</button>
                </form>
        </section>
    );
}

export default Admin;
