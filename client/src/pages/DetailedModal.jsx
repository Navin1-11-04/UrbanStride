import React from 'react';
import { RxCross2 } from "react-icons/rx";
import '../styles/detail.css';
import { IoBag, IoBagCheck } from "react-icons/io5";
import { useDispatch,useSelector } from 'react-redux';
import { toast, Bounce } from 'react-toastify';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function DetailedModal({ product, onClose }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartList.cart);
  const handleCart = () => {
    dispatch(addToCart(product));
    toast.success('Shoe Added to Bag', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  
  const moveToCart = cartItems.some(cartItem => cartItem.id === product.id);
  return (
    <div className="detail-wrapper">
      <span className='close' onClick={onClose}><RxCross2 /></span>
      <div className="detail-container">
        <div className="detail-main-img-container">
          <img src={product.images[0]} alt={product.name} className='product-detail-img' />
        </div>
        <div className="product-detail-info">
          <h1 className='detail-name'>{product.name}</h1>
          {product.sub_title && <h3 className='detail-sub-title'>{product.sub_title}</h3>}
          <h1 className='detail-price'>MRP : {product.price}</h1>
          <p className='detail-description'>{product.description}</p>
          
          <div className="detail-product-sizes">
            <h4 className='detail-titles'>Sizes </h4>
            <div className='detail-size-container'>
            {product.sizes.map((size, index) => (
              <span key={index} className="size-badge">{size}</span>
            ))}
            </div>
          </div>
          
          <div className='detail-colors-container'>
            <h4 className='detail-titles'>Colors </h4>
            <div className="detail-colors-sub-container">
            {product.colors.map((color, index) => (
              <span key={index} style={{ backgroundColor: color }} className='color-badge'></span>
            ))}
            </div>
          </div>

          <div className="detail-additional-info">
            <h4 className='detail-titles'>Category </h4>
            <p>{product.category}</p>

            <h4 className='detail-titles'>Material </h4>
            <p>{product.material}</p>
          </div>
          {moveToCart ? (
          <Link to='/cart' className='detail-cart-btn block'><p className='btn-text'>Add To Bag</p><IoBagCheck /></Link>
        ) : (
          <button className='detail-cart-btn' onClick={handleCart}><p className='btn-text'>Add To Bag</p><IoBag /></button>
        )}
        </div>
      </div>
    </div>
  );
}

export default DetailedModal;
