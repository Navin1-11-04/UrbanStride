import React, { useState } from 'react';
import '../styles/createorder.css'

function CreateOrder() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const token = localStorage.getItem('user');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://urban-stride-server.vercel.app/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          phone_no: phoneNo,
          address,
          name,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();
      setSuccess('Order created successfully!');
      setName('');
      setEmail('');
      setPhoneNo('');
      setAddress('');
    } catch (error) {
      setError('Error creating order. Please try again.');
    }
  };

  return (
    <div className="create-order-wrapper">
      <h2 className='create-order-title'>Create Order</h2>
      <form onSubmit={handleSubmit} className="create-order-form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="text"
            id="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Order</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}

export default CreateOrder;
