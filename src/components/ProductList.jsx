import React, { useState } from 'react';
import  "../assets/css/styles.css";

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateVinilo } from '../components/Redux/adminAPI.js';


function ProductList({id,imageSrc, title, subtitle, price,handleClick,handleEdit}) {

  const [valoresEdit, setValoresEdit] = useState({ title, subtitle, price });
  const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValoresEdit({ ...valoresEdit, [name]: value });
    };

    const handleSave = () => {
      handleEdit(id, valoresEdit);
      handleEdicion(id, valoresEdit);
  };
    const handleEdicion = (productId, updatedValues) => {
      console.log('hola',productId)
      dispatch(updateVinilo({ productId, title,price }))
          .unwrap()  // Desenvuelve la promesa para manejar errores directamente
          .then(() => {
              console.log(`Producto con id ${productId} actualizado correctamente`);
          })
          .catch(err => {
              console.error('Error actualizando vinilo:', err);
          });
  
  };
    
    
  return (
    <div className="product-list d-flex align-items-center background-white-2 w-100">
      <img src={`data:image/jpeg;base64,${imageSrc}`} alt={title} />
      {handleEdit ? (
                    <>
                        <input type="text" name="title" value={valoresEdit.title} onChange={handleInputChange} />
                        <input type="text" name="subtitle" value={valoresEdit.subtitle} onChange={handleInputChange} />
                        <input type="number" name="price" value={valoresEdit.price} onChange={handleInputChange} />
                        <button onClick={ handleSave}>Guardar</button>
                        <button className="delete-button d-flex align-items-center justify-content-center" onClick={handleClick}>X</button>
                    </>
                ) : (
                    <>
                        <p className="product-list-info ms-2">{title}</p>
                        <p className="product-list-info">{subtitle}</p>
                        <p className="product-list-info price">$ {price}</p>
                        <button className="delete-button d-flex align-items-center justify-content-center" onClick={handleClick}>X</button>
                    </>
                )}
    </div>
  );
}

export default ProductList;
