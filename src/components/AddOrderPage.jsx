import React, { useState } from 'react';

const AddOrderPage = () => {
  const [order, setOrder] = useState({ customerName: '', productId: '', quantity: '' });
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!order.customerName || !order.productId || !order.quantity) {
      setError('Please fill all fields');
      return;
    }

    // Check if customer exists
    const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
    const customer = savedCustomers.find((customer) => customer.name === order.customerName);

    if (!customer) {
      setError('Customer not found');
      return;
    }

    // Create the new order
    const newOrder = {
      id: Date.now(),
      customerId: customer.id,
      customerName: order.customerName,
      productId: order.productId,
      quantity: order.quantity,
    };

    // Save order and reset state
    try {
      const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
      savedOrders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(savedOrders));
      setOrder({ customerName: '', productId: '', quantity: '' });
      setIsModalOpen(true);
    } catch (e) {
      setError('Error creating order.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>Create Order</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={order.customerName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="productId"
          placeholder="Product ID"
          value={order.productId}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={order.quantity}
          onChange={handleChange}
        />
        <button type="submit">Create Order</button>
      </form>

      {isModalOpen && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <h3>Order Created Successfully!</h3>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddOrderPage;
