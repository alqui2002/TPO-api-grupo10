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
        console.log(newProduct)
    };
    
    return (
        <section id="admin-form" className="background-color-1">
                <h3>Agregar Nuevo Producto</h3>
                <form>
                    <input type="text" name="title" placeholder="Título" value={newProduct.title} onChange={handleChange}/>
                    <input type="text" name="subtitle" placeholder="Artista" value={newProduct.subtitle} onChange={handleChange} />
                    <input type="text" name="price" placeholder="Precio" value={newProduct.price} onChange={handleChange}  />
                    <input type="text" name="imageSrc" placeholder="URL de la imagen" value={newProduct.imageSrc} onChange={handleChange} />
                    <button type="submit" onClick={handleClick}>Agregar Vinilo</button>
                </form>
        </section>
    );
}

export default Admin;
