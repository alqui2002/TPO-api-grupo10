import React, { useState, useEffect } from 'react';
import ProductList from "../components/ProductList.jsx";

import inRainbows from "../assets/img/Inrainbowscover.png";
import rumours from "../assets/img/Rumourscover.png";
import folklore from "../assets/img/folklorecover.png";
import civilizacion from "../assets/img/lospiojoscivilizacion.webp";
import redTS from "../assets/img/redcover.jpeg";
import ttps from "../assets/img/ttps.jpeg"
import uvst from "../assets/img/unVeranoSinTi.jpeg"
import ohms from "../assets/img/ohms.jpg"
import am from "../assets/img/am.jpg"
import badbo from "../assets/img/yhlqmdlg.jpg"
import TDB from "../assets/img/talentoDeBarrio.jpg"
import EasyMoney from "../assets/img/EasyMoney.jpg"
import RHLM from "../assets/img/RHLM.jpg"
import crisis from "../assets/img/crisis.jpg"
import mp3 from "../assets/img/mp3.jpg"
import "../assets/css/admin.css"

const Admin = ({isAdmin}) => {
    const [products, setProductos] = useState([
        { id: 1, title: 'In Rainbows',subtitle:'Radiohead',imageSrc:inRainbows,price: 80.000, genero:"Alternativo"},
        { id: 2, title: 'Folklore', subtitle:'Taylor Swift',imageSrc:folklore,price: 90.000,genero:'indie Folk' },
        { id: 3, title: 'Rumours', subtitle:'Fleetwood Mac',  imageSrc:rumours,price: 85.000, genero:'Rock' },
        { id: 4, title: 'Civilización', subtitle:'Los Piojos',  imageSrc:civilizacion,price: 75.000 , genero:'Nacional'},
        { id: 5, title: "Red (Taylor's Version)", subtitle:'Taylor Swift',  imageSrc:redTS,price: 70.000,genero:'Pop' },
        { id: 6, title: "The Tortured Poets Department: The Anthology ", subtitle:'Taylor Swift',  imageSrc:ttps,price: 100.000, genero:'Pop' },
        { id: 7, title: "Un Verano Sin Ti", subtitle:'Bad Bunny',  imageSrc:uvst,price: 120.000, genero:'Pop' },
        { id: 8, title: "Ohms", subtitle:'Deftones',  imageSrc:ohms,price: 120.000, genero:'Rock' },
        { id: 9, title: "AM", subtitle: 'Arctic Monkeys', imageSrc: am, price: 90.000, genero: 'Rock' },
        { id: 10, title: "YHLQMDLG", subtitle:'Bad Bunny',  imageSrc:badbo,price: 140.000, genero:'Pop' },
        { id: 11, title: "Talento De Barrio", subtitle:'Daddy Yankee',  imageSrc:TDB,price: 125.000, genero:'Pop' },
        { id: 12, title: "Easy Money Baby", subtitle:'Myke Towers',  imageSrc:EasyMoney,price: 100.000, genero:'Pop' },
        { id: 13, title: "Real Hasta La Muerte", subtitle:'Anuel AA',  imageSrc:RHLM,price: 120.000, genero:'Pop' },
        { id: 14, title: "Crisis", subtitle:'Las Pastillas Del Abuelo',  imageSrc:crisis,price: 70.000, genero:'Rock' },
        { id: 15, title: ".MP3", subtitle:'Emilia Mernes',  imageSrc:mp3,price: 80.000, genero:'Pop' },
    ]);

    
    const [filtrados, setFiltrados] = useState([]);
    const [newProduct, setNewProduct] = useState({ id: '', title: '', subtitle: '', price: '', imageSrc: '' });
    const [busquedaProduct, setBusquedaProduct] = useState({ id: '', title: '', subtitle: '', price: '', imageSrc: '' });
    const [editingProduct, setEditing] = useState(null);

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
            const esTitulo = product.title.toLowerCase().includes(busquedaProduct.title.toLowerCase());
            return esTitulo ;
        });
        setFiltrados(filtrados);
        setEditing(true);
    };

    const handleEliminar =  (productToDelete) => {
        setProductos(prevItems => prevItems.filter(item => item.id !== productToDelete));
        handleSearch();
        return products;
    };

    const handleAgregar = (e) => {
        const id = products.length + 1;
        const nuevoAlbum = { id, ...newProduct };
        setProductos([...products, nuevoAlbum]);
    };

    const handleEdit = (productId, field, value) => {
        const productosActualizados = products.map(product =>
            product.id === productId ? { ...product, [field]: value } : product
        );
        setProductos(productosActualizados);
        handleSearch();
    };

    

    useEffect(() => {
        if (editingProduct === true)
            handleSearch();
        console.log(products);
    }, [products]);

    if (!isAdmin) {
        return null; 
    }

    
    return (
        <div className='admin'>
            <h2 className="ps-4 pb-4">Admin</h2>
            <section className='admin-filter'>
                <h3>Filtrar Productos</h3>
                <input type="text" name="title" placeholder="Título" value={busquedaProduct.title} onChange={handleChangeBusqueda}/>
                <button type='button' onClick={handleSearch} >Buscar Albúm</button>


                {filtrados.map(product => (
                        
                    <ProductList
                        key={product.id}
                        imageSrc={product.imageSrc}
                        title={product.title}
                        subtitle={product.subtitle}
                        price={product.price}
                        showEdit={true} 
                        handleEdit={(field, value) => handleEdit(product.id, field, value)} 
                        handleClick={() => handleEliminar(product.id)} 
                    />

                ))}



            </section>
            <section id="admin-form-new" className="background-color-1 admin-section-new">
                    <h3>Agregar Nuevo Producto</h3>
                    <form className="py-2">
                        <input type="text" name="title" placeholder="Título" value={newProduct.title} onChange={handleChange}/>
                        <input type="text" name="subtitle" placeholder="Artista" value={newProduct.subtitle} onChange={handleChange} />
                        <input type="text" name="price" placeholder="Precio" value={newProduct.price} onChange={handleChange}  />
                        <input type="text" name="imageSrc" placeholder="URL de la imagen" value={newProduct.imageSrc} onChange={handleChange} />
                    </form>
                    <button type="button" onClick={handleAgregar}>Agregar Vinilo</button>
            </section>
        {/*
        <section className='admin-eliminar-prod'>
        <h3>Eliminar Producto</h3>
                <form>
                    <input type="text" name="title" placeholder="Título" value={newProduct.title} onChange={handleChange}/>
                    <input type="text" name="subtitle" placeholder="Artista" value={newProduct.subtitle} onChange={handleChange} />
                    <input type="text" name="price" placeholder="Precio" value={newProduct.price} onChange={handleChange}  />
                    <input type="text" name="imageSrc" placeholder="URL de la imagen" value={newProduct.imageSrc} onChange={handleChange} />
                    <button type="submit" onClick={handleClick}>Agregar Vinilo</button>
                </form>
        </section>*/}
        </div>

        
    );

}

export default Admin;
