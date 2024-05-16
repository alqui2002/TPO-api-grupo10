import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, updateProduct } from '../redux/productsSlice';

function ProductList(id) {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const product = products.find(product => product.id == id.id);

  const [editing, setEditing] = useState(false);

  const [editTitle, setEditTitle] = useState(product.title);
  const [editSubtitle, setEditSubtitle] = useState(product.subtitle);
  const [editPrice, setEditPrice] = useState(product.price);

  const handleChange = () => {
    const updatedProduct = {
      id: product.id,
      title: editTitle,
      subtitle: editSubtitle,
      image: product.image,
      price: editPrice,
      genero: product.genero,
      description: product.description 
    };
    dispatch(updateProduct({ id: product.id, updatedProduct }));
    setEditing(false);
  }

  if (editing) {
    return (
      <div className="product-list d-flex align-items-center justify-content-between background-white-2 w-100">
        <div className="d-flex align-items-center">
          <img src={product.image} alt="cover" />
          <input type="text" name="title" placeholder={product.title} value={editTitle} className="ms-1" onChange={(e) => setEditTitle(e.target.value)}/>
          <div className="m-1"></div>
          <input type="text" name="subtitle" placeholder={product.subtitle} value={editSubtitle} className="ms-5" onChange={(e) => setEditSubtitle(e.target.value)}/>
          <div className="m-1"></div>
          <input type="text" name="price" placeholder={product.price} value={editPrice} className="ms-5" onChange={(e) => setEditPrice(e.target.value)}/>
        </div>
        <div className="d-flex">
          <button id="admin-save-button" onClick={handleChange} className="admin-product-button d-flex background-green-1 align-items-center justify-content-center m-2">Guardar</button>
        </div>
      </div>
    )
  }

  if (!editing) {
    return (
      <div className="product-list d-flex align-items-center justify-content-between background-white-2 w-100">
        <div className="d-flex align-items-center">
          <img src={product.image} alt="cover" />
          <p className="product-list-info ms-2 my-0">{product.title}</p>
          <p className="product-list-info my-0">{product.subtitle}</p>
          <p className="product-list-info price my-0">$ {product.price}</p>
        </div>
        <div className="d-flex">
          <button id="admin-edit-button" onClick={() => setEditing(true)} className="admin-product-button d-flex align-items-center justify-content-center m-2">Editar</button>
          <button id="admin-delete-button" onClick={() => dispatch(removeProduct(product.id))} className="admin-product-button background-red-1 d-flex align-items-center justify-content-center m-2">Eliminar</button>
        </div>
      </div>
    );
  }
}

export default ProductList;
