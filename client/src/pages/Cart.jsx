import React, { useEffect, useMemo } from 'react';
import '../styles/cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeItem, setCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";

function Cart() {
  const cartItems = useSelector((state) => state.cartList.cart);
  const dispatch = useDispatch();
  const token = localStorage.getItem('user');

  useEffect(() => {
    if (token) {
      getCartItems();
    }
  }, [token]);

  const getCartItems = async () => {
    try {
      const res = await fetch(`https://urban-stride-server.vercel.app/cart`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(setCart(data.cartItems));
      } else {
        console.error('Failed to fetch cart items:', data.message);
      }
    } catch (err) {
      console.error('Error fetching cart items:', err);
    }
  };

  const addItem = async (productId, quantity) => {
    try {
      const res = await fetch(`https://urban-stride-server.vercel.app/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ product_id: productId, quantity }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(incrementItem({ id: productId })); 
      } else {
        console.error('Failed to add item to cart:', data.message);
      }
    } catch (err) {
      console.error('Error adding item to cart:', err);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const res = await fetch(`https://urban-stride-server.vercel.app/cart/${itemId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        dispatch(removeItem({ id: itemId })); 
      } else {
        const data = await res.json();
        console.error('Failed to remove item from cart:', data.message);
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  let total = useMemo(() => {
    let sum = 0;
    cartItems.forEach((item) => (sum += item.price * item.quantity));
    return sum.toFixed(2);
  }, [cartItems]);

  return (
    <div className="cart-wrapper">
      <div className="shoping-cart-container">
        <div className="cart-header">
          <h2 className='cart-title'>Your Bag</h2>
          <p className='cart-sub'>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
        </div>
        <div className="cart-items-list">
          {cartItems && cartItems.length === 0 ? (
            <p className='default-cart-txt'>Your bag is currently empty. Start adding items to fill it up!</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-card">
                <div className="cart-img-container">
                  <img src={item.image} alt={item.name} className="cart-img" />
                </div>
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-price">{item.price}</p>
                <div className="btn-group">
                  <button className="remove-btn" onClick={() => addItem(item.product_id, item.quantity - 1)}><IoIosRemove /></button>
                  {item.quantity}
                  <button className='add-btn' onClick={() => addItem(item.product_id, item.quantity + 1)}><IoAddSharp /></button>
                  <button className='delete-btn' onClick={() => handleRemoveItem(item.product_id)}><MdDelete /></button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="order-summary-container">
        <div className="cart-header">
          <h2 className='cart-title'>Order Summary</h2>
        </div>
        <div className="price-content-container">
          <span className='price-content'>
            <p className='cart-sub-title'>Subtotal</p>
            <p className='cart-sub-title'>{total}</p>
          </span>
          <span className='price-content'>
            <p className='cart-sub-title'>Estimated Delivery & Handling</p>
            <p className='cart-sub-title'>0</p>
          </span>
          <div className="total-container">
            <span className='price-content'>
              <p className='cart-sub-title'>Total</p>
              <p className='cart-sub-title'>{total}</p>
            </span>
          </div>
        </div>
        <Link to="/placeorder" className='checkout-btn'>Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;
