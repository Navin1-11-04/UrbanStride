import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from '../redux/orderSlice';
import { IoBagAddSharp } from 'react-icons/io5';

import '../styles/orders.css';

function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  const token = localStorage.getItem('user');
  const [visibleOrderIndex, setVisibleOrderIndex] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/order', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();
        dispatch(setOrders(data.orderItems));
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [dispatch, token]);

  const toggleOrderVisibility = (index) => {
    setVisibleOrderIndex(visibleOrderIndex === index ? null : index);
  };

  return (
    <div className="orders-wrapper">
      <div className="orders-container">
        <h2 className="orders-title">Your Orders</h2>
        {orders.length === 0 ? (
          <div className="no_orders-container center">
              <IoBagAddSharp className='no_orders-img'/>
              <p className='no_orders-txt'>You have no orders yet. Start shopping to place an order!</p>
          </div>        ) : (
          orders.map((order, index) => (
            <div key={index} className="order-card">
              <h3 className='order-sub-title' onClick={() => toggleOrderVisibility(index)}>
                Order for {order.name}
              </h3>
              <p className='order-titles'>Email : {order.email}</p>
              <p className='order-titles'>Phone : {order.phone}</p>
              <p className='order-titles'>Address : {order.address}</p>
              {visibleOrderIndex === index && (
                <div className="order-items">
                  {order.products.map((product, i) => (
                    <div key={i} className="order-item">
                      <img src={product.image[0]} alt={product.name} className="order-item-image" />
                      <div className="order-item-info">
                        <p>{product.name}</p>
                        <p>Price: {product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;

