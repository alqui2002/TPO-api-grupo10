import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lessCartItemQuantity, addItemToCart, removeItemFromCart } from '../redux/accountsSlice';

function ProductList({ id }) {
  //const dispatch = useDispatch();
  const products = null;//useSelector(state => state.products.products);
  //const currentUser = useSelector(state => state.accounts.currentUser);
  const product = null//products.find(product => product.id === id);
  const [quantity, setQuantity] = useState(1)//currentUser.cart[id] || 0);

  const handleLessQuantity = () => {/*
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      dispatch(lessCartItemQuantity(id));
    }*/
  };

  const handleMoreQuantity = () => {/*
    if (quantity < 10) {
      setQuantity(prevQuantity => prevQuantity + 1);
      dispatch(addItemToCart(id));
    }*/
  };

  return (
    <div className="product-list d-flex align-items-center justify-content-between background-white-2 w-100">
      <div className="d-flex align-items-center">
        <img src={product.image} alt="cover" />
        <div className="d-flex flex-column justify-content-center">
          <h4 className="product-column-1 my-0">{product.title}</h4>
          <h5 className="product-column-1 my-0">{product.subtitle}</h5>
        </div>
        <p className="product-column-2 my-0">$ {product.price}</p>
        <div className="d-flex align-items-center justify-content-center product-column-3">
          <button id="product-less-button" className="product-less-more-button" onClick={handleLessQuantity}>-</button>
          <p className="my-0 mx-1">{quantity}</p>
          <button id="product-more-button" className="product-less-more-button" onClick={handleMoreQuantity}>+</button>
        </div>
      </div>
      {//<button id="user-delete-button" className="admin-product-button background-red-1 d-flex align-items-center justify-content-center m-2 px-3" onClick={() => dispatch(removeItemFromCart(id))}>Eliminar</button>
}   </div>
  );
}

export default ProductList;
