import React from 'react';
import { SiNike } from "react-icons/si";
import { IoBag, IoBagCheck } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Product({ item, isInCart, isFavourite, onAddToCart, onToggleFavourite, onModalOpen }) {

  return (
    <div className="product-card">
      <span><SiNike className='brand' /></span>
      <span className='like-icon-container' onClick={() => onToggleFavourite(item)}>
        {isFavourite ? <FaHeart className='like-icon' /> : <FaRegHeart className='like-icon' />}
      </span>
      <div className="product-image-container" onClick={() => onModalOpen(item)}>
        <img src={item.images[0]} alt={item.name} className='product-img' />
      </div>
      <div className="product-info-container">
        <h2 className='product-name'>{item.name}</h2>
        {item.sub_title && <p className='sub-title'>{item.sub_title}</p>}
        <p className='price'>MRP : {item.price}</p>
        {item.colors && (
          <div className='colors-container'>
            {item.colors.map((color, index) => (
              <span key={index} style={{ backgroundColor: color }} id='colors'></span>
            ))}
          </div>
        )}
        {isInCart ? (
          <Link to='/cart' className='cart-btn'><IoBagCheck className='cart-btn__icon'/></Link>
        ) : (
          <button className='cart-btn' onClick={() => onAddToCart(item)}><IoBag className='cart-btn__icon'/></button>
        )}
      </div>
    </div>
  );
}

export default Product;
